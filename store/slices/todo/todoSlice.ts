import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../../components/app/types/ITodo';
import { ETodoDialogView } from '../../types/ETodoDialogView';
import { ITodoState } from '../../types/ITodoState';
import { AllTodoRoutingStatusType } from '../../../components/app/types/ITodoStatusProps';

const defaultPaymentState: ITodoState = {
  dialogIsOpen: false,
  loading: false,
  view: ETodoDialogView.View_Todo_View,
  todos: [],
  currentStatus: 'all'
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
      state.selectedTodoId = 0;
      state.view = ETodoDialogView.View_Todo_View;
    },
    setLoading(state: ITodoState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    addTodo(state: ITodoState, action: PayloadAction<ITodo>) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state: ITodoState, action: PayloadAction<number>) {
      state.todos = state.todos?.filter(
        (todo: ITodo) => todo.id !== action.payload
      );
    },
    updateTodo(state: ITodoState, action: PayloadAction<ITodo>) {
      const otherTodos: ITodo[] = state.todos?.filter(
        (todo: ITodo) => todo.id !== action.payload.id
      );
      state.todos = [...otherTodos, action.payload];
    },
    addTodos(state: ITodoState, action: PayloadAction<ITodo[]>) {
      const allTodoIDs: number[] = state.todos?.map((todo: ITodo) => todo.id);

      const newTodos: ITodo[] = action.payload?.filter(
        (todo: ITodo) => !allTodoIDs.includes(todo.id)
      );

      state.todos = [...state.todos, ...newTodos];
    },

    setTodos(state: ITodoState, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload;
    },
    clearTodos(state: ITodoState) {
      state.todos = [];
    },

    setCurrentStatus(
      state: ITodoState,
      action: PayloadAction<AllTodoRoutingStatusType>
    ) {
      state.currentStatus = action.payload;
    },

    setView(state: ITodoState, action: PayloadAction<ETodoDialogView>) {
      state.view = action.payload;
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
