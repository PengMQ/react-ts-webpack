export interface todoItemInterface {
    id: number,
    text: String,
    completed: boolean
}
export interface todoListInterface {
    todoList: todoItemInterface[]
}
