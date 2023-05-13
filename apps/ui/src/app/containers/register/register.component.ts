import { Component } from '@angular/core';
import { AuthenticateModel } from '../../data-models/authenticate.model';

@Component({
  selector: 'course-project-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  register(authenticate: AuthenticateModel): void {
    console.log(authenticate);
  }
}
