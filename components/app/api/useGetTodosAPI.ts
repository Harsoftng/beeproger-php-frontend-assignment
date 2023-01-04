import useSWR from 'swr';
import { ITodo } from '../types/ITodo';
import { AllTodoRoutingStatusType } from '../types/ITodoStatusProps';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { todoActions } from '../../../store/slices/todo/todoSlice';

interface ITodoData {
  data: ITodo[];
}

export const useGetTodosAPI = (status: AllTodoRoutingStatusType) => {
  const dispatch = useAppDispatch();

  const endPoint: string =
    status === 'all' ? '/api/todos/' : `/api/todos/status/${status}`;

  const { data, error } = useSWR<ITodoData>(endPoint, {
    onSuccess: (data: ITodoData) => {
      const todos: ITodo[] = data?.data || [];

      if (todos && todos?.length > 0) {
        dispatch(todoActions.addTodos(todos));
      }
    }
  });

  const isLoading: boolean = !data && !error;

  return {
    data,
    error: error,
    isLoading: isLoading
  };
};
