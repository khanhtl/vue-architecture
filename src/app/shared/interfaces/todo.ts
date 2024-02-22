export interface Todo {
    id: string;
    title: string;
    completed: boolean
}

export type TodoId=Todo['id'];
export type AddTodo=Omit<Todo, 'id' | 'completed'>;
export type EditTodo={
    id: TodoId,
    data: AddTodo
}