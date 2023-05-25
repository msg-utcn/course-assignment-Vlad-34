import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from '@course-project/data-models';

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  public getAllUsers(): Observable<UserModel> {
    return this.httpClient.get('http://localhost:3000/api/users');
  }
}
