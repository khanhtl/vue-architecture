<script setup lang="ts">
import { ref } from 'vue';
import {type AddTodo} from '@/app/shared/interfaces/todo'
const emit=defineEmits<{
    save: [todo: any]
}>();
const title=ref('');
</script>

<template>
<form @submit.prevent="emit('save', { title } as AddTodo); title = ''" class="todo-form">
    <input v-model="title" type="text">
    <button :disabled="!title" type="submit">Add</button>
</form>
</template>