import uuid from 'uuid/v4';
import { CREATE_TODO, COMPLETED_TODO, DELETE_TODO, DELETE_ALL_COMPLETED_TODOS } from '../actions/todos';

//create a reducer
export default (state = [], action) => {
    switch(action.type) {
        case CREATE_TODO:
            return [
                ...state,
                {
                    id: uuid(), 
                    text: action.text,
                    completed: false,
                }
            ]
        case COMPLETED_TODO:
            return state.map(todo => {
                if (todo.id === action.id ) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                    else { 
                        return todo;
                    }});
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
            //state.filer returns a new filtered array MINUS the action.id passed in

        case DELETE_ALL_COMPLETED_TODOS:
            return state.filter(todo => (todo.completed === false));
            //state.filter returns a new filtered array minus 
            //the todos with complete === true

        default:
            return state;
    }
};