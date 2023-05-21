import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AuthModule, authRoutes} from "./auth.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "@course-project/auth";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'auth', children: authRoutes},
      {path: 'questions', loadChildren: () =>
          import('@course-project/questions').then(module => module.QuestionsModule)
      },
      {path: 'users', loadChildren: () =>
          import('@course-project/users').then(module => module.UsersModule)
      }
      ]),
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
