import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  addMessage(data) {
  return new Promise((resolve, reject) => {
    this.http.post('https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/2c9bdbcb-09f0-4988-b999-1e4840245c6c/generateAnswer', JSON.stringify(data), {
    headers: new HttpHeaders().set('Ocp-Apim-Subscription-Key', '71e5dbe707684d73897382f7be56f5b7').set('Content-Type', 'application/json') 
  })
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


  getUsers() {
  return new Promise(resolve => {
    this.http.get('/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


}
