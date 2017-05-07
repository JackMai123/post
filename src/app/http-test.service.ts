import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
import  'rxjs/add/operator/map';


@Injectable()
export class HttpTestService {

  constructor(private _http: Http) { }


  GetSomething() {

      return this._http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json() );

  }


}

// export class ExampleService {
//     someMethod() {
//         return 'Hey!';
//     }
//   }
