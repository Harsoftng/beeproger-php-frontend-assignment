import React from 'react';
import { ITodo } from '../types/ITodo';
import TodoTableRow from './TodoTableRow';
import TodoNoDataFoundUI from './TodoNoDataFoundUI';

const TodoTableRows = ({
  todos = []
}: {
  todos: ITodo[];
}): React.ReactElement => {
  return (
    <>
      {todos?.map((todo: ITodo) => (
        <TodoTableRow todo={todo} key={todo.id} />
      ))}

      {todos?.length === 0 && <TodoNoDataFoundUI />}
    </>
  );
};

export default TodoTableRows;
