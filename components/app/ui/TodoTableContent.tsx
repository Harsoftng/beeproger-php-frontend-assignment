import React from 'react';
import TodoTableRows from './TodoTableRows';
import { ITodo } from '../types/ITodo';

const TodoTableContent = ({
  todos
}: {
  todos: ITodo[];
}): React.ReactElement => {
  return (
    <tbody>
      <TodoTableRows todos={todos} />
    </tbody>
  );
};

export default TodoTableContent;
