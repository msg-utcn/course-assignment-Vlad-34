import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { questionsRoutes } from './lib.routes';
import { QuestionsComponent } from './containers/questions/questions.component';
// import {HTTP_INTERCEPTORS} from "@angular/common/http";
// import {TokenInterceptorService} from "./services/token-interceptor.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(questionsRoutes)
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  declarations: [QuestionsComponent],
})
export class QuestionsModule {}
