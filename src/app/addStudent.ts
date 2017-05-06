import { ActionReducer, Action } from '@ngrx/store';

import { Student } from './student';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const RESET = 'RESET';

const initalState = stud();

export function addStudent(state: any = initalState, action: Action) {
	switch (action.type) {
		case ADD:
			return [
				...state.slice(0,action.payload.index),
				action.payload.item,
				...state.slice(action.payload.index+1)
			];

		case RESET:
			return [];

		default:
			return state;
	}
}


export function stud(){
	const students:Student [] = [
    new Student('Rahul',10),
    new Student('Rahul1',10),
    new Student('Rahul2',10),
    new Student('Rahul3',10),
    new Student('Rahul4',10)
  ]

  return students
}