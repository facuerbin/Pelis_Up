import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  passwordIsVisible = false;
  envelopeIcon = faEnvelope;
  keyIcon = faKey;
  eyeIcon = faEye;
  eyeSlashedIcon = faEyeSlash;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {

  }

  isValid(field: string): boolean {
    return this.loginForm.controls[field].errors !== null &&
    (this.loginForm.controls[field].touched || this.loginForm.controls[field].dirty);
  }

  async handleLogin() {
    const email = this.loginForm.controls["email"].value;
    const password = this.loginForm.controls["password"].value;
    await this.auth.processLogin(email, password);
    return await this.auth.isLoggedIn()
  }

  async handleGoogleLogin() {
    await this.auth.processGoogleLogin();
    return await this.auth.isLoggedIn();
  }

  togglePassword(event: MouseEvent) {
    event.preventDefault();
    return this.passwordIsVisible = !this.passwordIsVisible;
  }

}
