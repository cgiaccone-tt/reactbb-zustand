import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let inputStore = (set, get) => ({
    todoInput: '',
    handleInput: (event) => {
        set({ todoInput: event.target.value });
    },
    setTodoInput: (todoInput) => set({ todoInput: todoInput }),
});

inputStore = devtools(inputStore);
inputStore = persist(inputStore, { name: 'todoInput' });

const useTodoInputStore = create(inputStore);

export default useTodoInputStore;