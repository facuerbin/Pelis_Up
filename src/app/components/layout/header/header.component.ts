import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Icon
  loginIcon = faArrowRight;
  signOutIcon = faSignOutAlt;

  isLogged: boolean;

  constructor(private auth: AuthService, private router: Router) {
    this.isLogged = router.url.includes("dashboard");
  }

  async ngOnInit() {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) this.isLogged = event.url.includes("dashboard");
    })
  }

  signout (event: MouseEvent) {
    event.preventDefault();
    this.auth.signOut();
  }
}
