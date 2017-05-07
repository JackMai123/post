import { Component } from '@angular/core';
import { HttpTestService } from './http-test.service';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [HttpTestService]
    // providers: [HttpTestService]
})
export class AppComponent {

    tags:string[]  = ['AngularJS','Angluar2']
  title:string;
  getDatas : Observable<Array<any>>;

    constructor(private _httpService: HttpTestService){}

    // constructor(private _exampleService: ExampleService) {}


ngOnInit() : void{
this.OnTest();
}

    OnTest(){

      // this.title = 'app works!';
      // this._httpService.GetSomething()
      //   .subscribe(
          // data => this.getDatas = (data)

        // );

        this._httpService.GetSomething().subscribe(data => this.getDatas = (data));
        // this.getDatas = this._httpService.GetSomething();

        //  this.getData= this._exampleService.someMethod();;
    }


    OnTest1(){

    console.log( this.getDatas );
  }

}
