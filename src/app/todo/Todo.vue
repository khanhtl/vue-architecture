<script setup lang="ts">
import { useTodoService } from "../shared/data-access/useTodoService";
import TodoForm from "./ui/TodoForm.vue";
import TodoList from "./ui/TodoList.vue";

const todoService = useTodoService();
</script>

<template>
  <div>
    <TodoForm @save="todoService.add($event)" />
    <TodoList
      :todos="todoService.todos.value"
      @toggle="todoService.toggle($event)"
    />
  </div>
</template>

<style lang="scss"></style>
