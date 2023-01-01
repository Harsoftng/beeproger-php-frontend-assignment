import { ETodoDialogView } from './ETodoDialogView';
import { ITodo } from '../../components/app/types/ITodo';
import { AllTodoRoutingStatusType } from '../../components/app/types/ITodoStatusProps';

export interface ITodoState {
  dialogIsOpen: boolean;
  loading: boolean;

  selectedTodoId?: number;
  view: ETodoDialogView;

  todos: ITodo[];
  currentStatus: AllTodoRoutingStatusType;
}
