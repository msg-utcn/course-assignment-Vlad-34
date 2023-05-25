import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticateModel} from "@course-project/data-models";

@Component({
  selector: 'course-project-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<AuthenticateModel>();

  // reactive form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    this.submit.emit({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    } as AuthenticateModel);
  }
}
