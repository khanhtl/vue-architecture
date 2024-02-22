<script setup lang="ts">
import type { Todo, TodoId } from "@/app/shared/interfaces/todo";

defineProps<{
  todos: Todo[];
}>();

const emit = defineEmits<{
  toggle: [id: TodoId];
}>();
</script>

<template>
  <template v-if="todos.length">
    <div v-for="todo in todos" :key="todo.id">
      <span @click="emit('toggle', todo.id)">
        <template v-if="todo.completed">✅</template>
        <template v-else>🟩</template>
      </span>
      {{ todo.title }}
    </div>
  </template>
  <div v-else>No todo</div>
</template>
