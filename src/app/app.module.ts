import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { addStudent } from './addStudent';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CommonService } from './common.service';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.provideStore({ addS: addStudent })


  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
