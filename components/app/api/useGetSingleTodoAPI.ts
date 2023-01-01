import useSWR from 'swr';
import { ITodo } from '../types/ITodo';
import { useState } from 'react';

interface ITodoData {
  data: ITodo;
}

export const useGetSingleTodoAPI = (id: number) => {
  const [todo, setTodo] = useState<ITodo>();
  const endPoint = `/api/todos/${id}`;

  const { data, error, isLoading, isValidating } = useSWR<ITodoData>(endPoint, {
    onSuccess: (data: ITodoData) => {
      const todo: ITodo = data?.data || [];

      if (todo) {
        setTodo(todo);
        console.log({ todo });
      }
    }
  });

  // const isLoading: boolean = !data && !error;

  return {
    data,
    error: error,
    isLoading: isLoading || isValidating,
    todo
  };
};
