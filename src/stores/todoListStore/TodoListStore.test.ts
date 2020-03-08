import {Todos} from "./TodoListStore";

describe('TodoListStore', () => {

    it('should have 2 uncompleted todos at the beginning', () => {
        const todos = new Todos();
        expect(todos.uncompletedNumber).toBe(2);
    });
    it('should change completed to be true when click the todo', () => {
        const todos = new Todos();
        todos.toggleTodo(1);
        expect(todos.todos[1].completed).toBe(true);
    });
    it('should change uncompletedNumber to be 1 when there is only one todo uncompleted', () => {
        const todos = new Todos();
        todos.toggleTodo(1);
        expect(todos.uncompletedNumber).toBe(1);
    })
});