/*

SPEC

Create a todo 
List all todos 
Click for completed todo
Delete a todo
Deleted all completed todos



*/

export const CREATE_TODO = 'CREATE_TODO';
//added new COMPLETED const so...
export const COMPLETED_TODO =  'COMPLETED_TODO';

export function createTodo(text) {
    return {
        type: CREATE_TODO,
        text
    }
}

//create new function for completed. It takes an ID
export function completedTodo(id) {
    return {
        type: COMPLETED_TODO,
        id
    }

}