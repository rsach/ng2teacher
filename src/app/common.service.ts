import { Injectable } from '@angular/core';
import { Student } from './student';
import { Teacher } from './teacher';

@Injectable()
export class CommonService {
	students:Student [] = [
		new Student('Rahul',10),
		new Student('Rahul1',10),
		new Student('Rahul2',10),
		new Student('Rahul3',10),
		new Student('Rahul4',10),
	]

	teachers:Teacher [] = [
		new Teacher(1,'Suzan','Convent School'),
		new Teacher(2,'Suzan1','Convent School'),
		new Teacher(3,'Suzan2','Convent School'),
		new Teacher(4,'Suzan3','Convent School'),
		new Teacher(5,'Suzan4','Convent School'),
		new Teacher(6,'Suzan5','Convent School'),
	]

  constructor() { }

  

  getTeacher(id){
  	let teacher = this.teachers.filter(teacher => teacher.Id == +id);
  	return teacher[0];
  }


 



}
