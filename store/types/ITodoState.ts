import { ETodoDialogView } from './ETodoDialogView';
import { ITodo } from '../../components/app/types/ITodo';

export interface ITodoState {
  dialogIsOpen: boolean;
  loading: boolean;

  selectedTodoId?: number;
  view: ETodoDialogView;

  todos: ITodo[];
}
