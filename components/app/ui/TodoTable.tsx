import React from 'react';
import TodoTableColumns from './TodoTableColumns';
import TodoTableContent from './TodoTableContent';
import TodoTableFooter from './TodoTableFooter';
import TodoSectionTitle from './TodoSectionTitle';
import { ITodoTableProps } from '../types/ITodoSectionTitleProps';

const TodoTable = (props: ITodoTableProps) => {
  const { isAllMode, option, todos } = props;
  return (
    <div className="overflow-x-auto w-full" key={option.id}>
      <TodoSectionTitle isAllMode={isAllMode} option={option} />
      <table className="table table-zebra w-full">
        <TodoTableColumns />
        <TodoTableContent todos={todos} />
        <TodoTableFooter />
      </table>
    </div>
  );
};

export default TodoTable;
