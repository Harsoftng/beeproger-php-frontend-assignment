import { ITableDisplayOptions } from './ITableDisplayOptions';
import { ITodo } from './ITodo';

export interface ITodoSectionTitleProps {
  isAllMode: boolean;
  option: ITableDisplayOptions;
}
export interface ITodoTableProps extends ITodoSectionTitleProps {
  todos: ITodo[];
}
