import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable, of, switchMap } from 'rxjs';
import { User } from 'src/interfaces/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | undefined>;
  usuario: User | null = null;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router
  ) {
    this.user = this.fireAuth.authState.pipe(
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
    if (uid) this.getUserData(uid);

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
    if (uid) this.getUserData(uid);

    return uid? true: false;
  }

  async signOut() {
    await this.fireAuth.signOut();
    localStorage.clear();
    return this.router.navigate(['/']);
  }

  async getUserData(uid: string) {
    const data = this.fireStore.doc<User>(`users/${uid}`).get()
      .subscribe(result => {
        if (result.data()) {
          const data = result.data();
          this.usuario = {
            email: data?.email!,
            uid: data?.uid!,
            name: data?.name!,
            photo: data?.photo!
          };

          localStorage.setItem("user", JSON.stringify(this.usuario));
        }
        return result;
      });

    return data;
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

  isLoggedIn() : boolean {
    return true;
  }


}
