import React, { useCallback } from 'react';
import useTodoState from '../../../store/hooks/todo/useTodoState';
import { useGetTodosAPI } from '../api/useGetTodosAPI';
import { ITableDisplayOptions } from '../types/ITableDisplayOptions';
import { BarLoader } from 'react-spinners';
import TodoTable from './TodoTable';
import { AllTodoRoutingStatusType } from '../types/ITodoStatusProps';
import { ITodo } from '../types/ITodo';
import { ETodoStatus } from '../types/ETodoStatus';
import CreateTaskButton from './CreateTaskButton';

const TodoTableUI = (): React.ReactElement => {
  const { currentStatus, todos } = useTodoState();
  const { isLoading } = useGetTodosAPI(currentStatus);

  const isAllMode: boolean = currentStatus === 'all';

  const options: ITableDisplayOptions[] = isAllMode
    ? [
        { id: 1, status: 'pending' },
        { id: 2, status: 'completed' }
      ]
    : [{ id: 1, status: currentStatus }];

  const todoData = useCallback(
    (status: AllTodoRoutingStatusType) => {
      let data: ITodo[] = [];
      switch (status) {
        case 'all':
          data = todos;
          break;
        case 'completed':
          data = todos?.filter(
            (todo: ITodo) => todo.status === ETodoStatus.COMPLETED
          );
          break;
        case 'pending':
          data = todos?.filter(
            (todo: ITodo) => todo.status === ETodoStatus.PENDING
          );
          break;
      }

      return data;
    },
    [todos]
  );

  return (
    <>
      <CreateTaskButton />

      {isLoading && (
        <div className="flex items-center justify-center mb-2">
          <BarLoader loading={isLoading} width={'100%'} />
        </div>
      )}

      {options.map((option: ITableDisplayOptions) => (
        <TodoTable
          todos={todoData(option.status)}
          option={option}
          isAllMode={isAllMode}
          key={option.id}
        />
      ))}
    </>
  );
};

export default TodoTableUI;
