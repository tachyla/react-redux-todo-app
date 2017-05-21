/*

SPEC

Create a todo 
List all todos 
Click for completed todo
Delete a todo
Deleted all completed todos
*/

export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETED_TODO =  'COMPLETED_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_COMPLETED_TODOS = 'DELETE_ALL_COMPLETED_TODOS';

//create new function that creates a todo from input text
export function createTodo(text) {
    return {
        type: CREATE_TODO,
        text
    }
}

//create new function for completed todos. It takes an ID
export function completedTodo(id) {
    return {
        type: COMPLETED_TODO,
        id
    }

}

//create new function to Delete a todo. It should take an ID
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }

}

//create new function to Delete ALL todos. It should check state.completed 
export function deleteAllCompletedTodos() {
    return {
        type: DELETE_ALL_COMPLETED_TODOS,
    }

}