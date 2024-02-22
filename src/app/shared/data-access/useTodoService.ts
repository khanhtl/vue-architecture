import { computed, reactive } from "vue";
import type { Todo, AddTodo, TodoId } from "./../interfaces/todo";
interface TodoState {
  todos: Todo[];
}

export function useTodoService() {
  const state = reactive<TodoState>({
    todos: [],
  });
  const todos = computed(() => state.todos);

  function add(addTodo: AddTodo) {
    state.todos = [
      ...state.todos,
      {
        ...addTodo,
        id: Date.now().toString(),
        completed: false,
      },
    ];
  }

  function toggle(id: TodoId) {
    state.todos = state.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
      );
    
  }
  return {
    todos,
    add,
    toggle,
  };
}
