import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Observable'; 

import { Teacher } from '../teacher';

import { Store,State } from '@ngrx/store';
import { ADD, REMOVE, RESET } from '../addStudent';


import { Student } from '../student';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
	id:number;
	teacherRoute:any;
	teacher:Teacher;
	students:any ;

  counter: Observable<any>;


	

  constructor(private route: ActivatedRoute,
  			 private cs:CommonService,
         private store: Store<any> ) {
        store.select('addS').subscribe(state => this.students=state);

  }

   ngOnInit() {
    this.teacherRoute = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.teacher = this.cs.getTeacher(this.id);
    });





}

addStudent(student){
   this.teacherRoute = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       let k = this.students.findIndex(x => x.Name === student.Name);
       console.log(k);
       let stu = new Student(student.Name,student.NumFriends,this.id);
       this.store.dispatch({type:ADD,payload:{item:stu,index:k}})
       console.log(this.students)
      
    });



}


   ngOnDestroy() {
    this.teacherRoute.unsubscribe();
  }


}
