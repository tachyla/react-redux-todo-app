/*

SPEC

Create a todo 
List all todos 
Click for completed todo
Delete a todo
Deleted all completed todos



*/

export const CREATE_TODO = 'CREATE_TODO';

export function createTodo(text) {
    return {
        type: CREATE_TODO,
        text
    }
}