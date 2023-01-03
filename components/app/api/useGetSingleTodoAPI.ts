import useSWR from 'swr';
import { ITodo } from '../types/ITodo';
import { useState } from 'react';

interface ITodoData {
  data: ITodo;
}

export const useGetSingleTodoAPI = (id: number) => {
  const [todo, setTodo] = useState<ITodo>();
  const endPoint = `/api/todos/${id}`;

  const { data, error } = useSWR<ITodoData>(id > 0 ? endPoint : null, {
    onSuccess: (data: ITodoData) => {
      const todo: ITodo = data?.data || [];

      if (todo) {
        setTodo(todo);
        console.log({ todo });
      }
    }
  });

  console.log({ data });

  const isLoading: boolean = !data && !error;

  return {
    data,
    error: error,
    isLoading,
    todo,
    setTodo
  };
};
