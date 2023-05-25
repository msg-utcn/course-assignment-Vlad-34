import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { RegisterModel } from '@course-project/data-models';

@Component({
  selector: 'course-project-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Output() submit = new EventEmitter<RegisterModel>();

  // reactive form
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  register() {
    this.submit.emit({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name
    } as RegisterModel);
  }
}
