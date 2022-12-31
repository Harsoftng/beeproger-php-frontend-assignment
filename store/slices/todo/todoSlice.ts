import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../../components/app/types/ITodo';
import { ETodoDialogView } from '../../types/ETodoDialogView';
import { ITodoState } from '../../types/ITodoState';

const defaultPaymentState: ITodoState = {
  dialogIsOpen: false,
  loading: false,
  view: ETodoDialogView.View_Todo_View,
  todos: []
};

const todoSlice = createSlice({
  name: 'payments',
  initialState: defaultPaymentState,
  reducers: {
    openTodoDialog(state: ITodoState) {
      state.dialogIsOpen = true;
    },
    closeTodoDialog(state: ITodoState) {
      state.dialogIsOpen = false;
    },
    setLoading(state: ITodoState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    addTodo(state: ITodoState, action: PayloadAction<ITodo>) {
      state.todos = [...state.todos, action.payload];
    },
    addTodos(state: ITodoState, action: PayloadAction<ITodo[]>) {
      state.todos = [...state.todos, ...action.payload];
    },

    setTodos(state: ITodoState, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload;
    },
    clearPayments(state: ITodoState) {
      state.todos = [];
    },

    setSelectedTodoId(state: ITodoState, action: PayloadAction<number>) {
      state.selectedTodoId = action.payload;
    },
    clearSelectedIntern(state: ITodoState) {
      state.selectedTodoId = 0;
    },
    clearTodoState() {
      return defaultPaymentState;
    }
  }
});

export const { actions: todoActions } = todoSlice;

export default todoSlice;
