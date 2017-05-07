import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpTestService } from './http-test.service';
import {MaterialModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()

  ],
  providers: [HttpTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
