import { Component } from '@angular/core';
import {QuestionsService} from "../../services/questions.service";

@Component({
  selector: 'course-project-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {

  constructor(private questionService: QuestionsService) {}

  public getAllQuestions(): void {
    this.questionService.getAllQuestions().subscribe(questions => {
      console.log(questions);
    })
  }
}
