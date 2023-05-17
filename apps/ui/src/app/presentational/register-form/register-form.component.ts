import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'course-project-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Output() doRegister = new EventEmitter();

  register(authenticate: {
    email: string;
    password: string;
    confirm_password: string;
  }): void {
    this.doRegister.emit(authenticate);
  }
}
