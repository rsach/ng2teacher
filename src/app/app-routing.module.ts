import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';




import { TeacherComponent } from './teacher/teacher.component';

const appRoutes:Routes = [

	{path:'home/:id',component:TeacherComponent}
	

];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)

	],
	exports:[
		RouterModule
	]

})

export class AppRoutingModule{}