import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RegisterService} from "@course-project/auth";
import {RegisterModel} from "@course-project/data-models";

@Component({
  selector: 'course-project-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  constructor(private registerService: RegisterService) {}

  public register(register: RegisterModel): void {
    this.registerService.register(register).subscribe();
  }
}
