import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
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

  envelopeIcon = faEnvelope;
  keyIcon = faKey;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((result) => {
      console.log(result);
      console.log(this.loginForm.controls["email"].errors)
      console.log(this.loginForm.controls["password"].errors)

    })
  }

  isValid(field: string): boolean {
    return this.loginForm.controls[field].errors !== null &&
    (this.loginForm.controls[field].touched || this.loginForm.controls[field].dirty);
  }

  handleLogin() {
    console.log("Handle login")

  }

}
