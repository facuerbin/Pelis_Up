import { Component, OnInit, SimpleChanges } from '@angular/core';
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

  isLogged = false;
  constructor(private auth: AuthService) {
  }

  async ngOnInit() {
  }

}
