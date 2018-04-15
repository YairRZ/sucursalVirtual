import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUsers() {
  return this.http.post('https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/2c9bdbcb-09f0-4988-b999-1e4840245c6c/generateAnswer');
}

}
