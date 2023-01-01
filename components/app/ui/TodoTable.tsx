import React from 'react';
import useTodoState from '../../../store/hooks/todo/useTodoState';
import TodoTableColumns from './TodoTableColumns';
import TodoTableContent from './TodoTableContent';
import TodoTableFooter from './TodoTableFooter';
import { ITableDisplayOptions } from '../types/ITableDisplayOptions';
import TodoSectionTitle from './TodoSectionTitle';

const TodoTable = () => {
  const { currentStatus } = useTodoState();

  const isAllMode: boolean = currentStatus === 'all';

  const options: ITableDisplayOptions[] = isAllMode
    ? [
        { id: 1, status: 'pending' },
        { id: 2, status: 'completed' }
      ]
    : [{ id: 1, status: currentStatus }];

  return (
    <div className="overflow-x-auto w-full">
      {options.map((option: ITableDisplayOptions) => (
        <div key={option.id}>
          <TodoSectionTitle isAllMode={isAllMode} option={option} />
          <table className="table w-full">
            <TodoTableColumns />
            <TodoTableContent />
            <TodoTableFooter />
          </table>
        </div>
      ))}
    </div>
  );
};

export default TodoTable;
