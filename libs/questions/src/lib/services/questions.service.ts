import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionModel} from "@course-project/data-models";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllQuestions(): Observable<QuestionModel> {
    return this.httpClient.get('http://localhost:3000/api/question-management');
  }
}
