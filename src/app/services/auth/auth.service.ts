import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import { first, Observable, of, switchMap } from 'rxjs';
import { Category, MovieSeries } from 'src/interfaces/movie.series';
import { User } from 'src/interfaces/user.model';
import { MoviesService } from '../movies/movies.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | undefined>;
  user: User | null = null;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router,
    private movieService: MoviesService
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(undefined);
      })
    );
  }

  async processLogin(email: string, password: string) {
    const response = await this.fireAuth.signInWithEmailAndPassword(email, password)
      .catch(e => console.log("Login error: " + e));

    const uid = response?.user?.uid;
    if (uid) await this.fetchUserData(uid);

    const user = this.fireAuth.user;

    return this.router.navigate([""]);
  }

  async processGoogleLogin() {
    const response = await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(e => {
        console.log("Error en login: " + e);
        return null;
      });

    const uid = response?.user?.uid;
    if (uid) await this.fetchUserData(uid);
    this.router.navigate(["/dashboard"]);
    return uid ? true : false;
  }

  async signOut() {
    await this.fireAuth.signOut();
    localStorage.clear();
    return this.router.navigate(['/']);
  }

  async fetchUserData(uid: string) {
    return new Promise<User>(resolve => {
      this.fireStore.doc<User>(`users/${uid}`)
        .get()
        .pipe(first())
        .subscribe(result => {
          if (result.data()) {
            const data = result.data();
            this.user = {
              email: data?.email!,
              uid: data?.uid!,
              name: data?.name!,
              photo: data?.photo!,
              list: data?.list || []
            };

            localStorage.setItem("user", JSON.stringify(this.user));
            resolve(this.user);
          }
        });
    })
  }

  getUser() {
    this.user$.subscribe(user => {
      this.user = {
        uid: user?.uid ? user.uid : "",
        email: user?.email ? user.email : "",
        name: user?.name ? user.name : ""
      }
    });

    return this.user;
  }

  updateUser(user: User | any) {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      photo: user.photo
    };

    return userRef.set(data, { merge: true });
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await this.fireAuth.currentUser;
    return user ? true : false;
  }

  async addItem(id: number, category: Category): Promise<any> {
    const item = category === Category.MOVIE ? await this.movieService.getMoviesById(id.toString()) : await this.movieService.getSeriesById(id.toString());
    const localUser = JSON.parse(localStorage.getItem("user") || "");
    const userData = await this.fetchUserData(localUser.uid);

    if (userData) {
      const movieSerie: MovieSeries = {
        id: item.id,
        name: item.name,
        description: item.overview,
        image: item.poster_path,
        rating: item.vote_average,
        category
      };

      if (userData.list) {
        let itemIndex: number | null = null;
        userData.list.forEach((item, index) => {
          if (item.id === movieSerie.id) {
            itemIndex = index;
          }
        });

        if (itemIndex) userData.list.splice(itemIndex, 1);
        else userData.list.push(movieSerie)
      } else {
        userData.list = [movieSerie];
      }
    }

    await this.fireStore.doc<User>(`users/${this.getUser()?.uid}`).update({ list: userData.list })
  }

  async getItems(uid: string): Promise<User> {
    return new Promise(resolve => {
      this.fireStore.doc<User>(`users/${uid}`).get().pipe(first()).subscribe(result => {
        resolve(result.data() as User);
      });
    })
  }
}
