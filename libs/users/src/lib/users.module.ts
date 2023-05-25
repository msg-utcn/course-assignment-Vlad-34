import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { UsersComponent } from './containers/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
  ],
  declarations: [UsersComponent],
})
export class UsersModule {}
