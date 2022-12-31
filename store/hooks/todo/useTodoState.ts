import { useAppSelector } from '../useAppSelector';
import { RootAppState } from '../../index';
import { ITodoState } from '../../types/ITodoState';

export default function useTodoState(): ITodoState {
  return useAppSelector((state: RootAppState) => state.todos);
}
