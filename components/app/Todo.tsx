import React, { useEffect } from 'react';
import TodoStatusSwitcher from './ui/TodoStatusSwitcher';
import { ITodoStatusProps } from './types/ITodoStatusProps';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { todoActions } from '../../store/slices/todo/todoSlice';
import TodoTableUI from './ui/TodoTableUI';
import TodoDialogUI from './ui/TodoDialogUI';

const Todo = ({ status = 'all' }: ITodoStatusProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status) {
      dispatch(todoActions.setCurrentStatus(status));
    }
  }, [status]);

  return (
    <div className="flex w-screen items-center justify-center flex-col gap-8">
      <TodoStatusSwitcher />

      <div className="md:w-9/12 lg:w-1/2 sm:w-11/12 xs:w-11/12 mx-auto">
        <TodoTableUI />
      </div>

      <TodoDialogUI />
    </div>
  );
};

export default Todo;
