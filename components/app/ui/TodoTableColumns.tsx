import React from 'react';
import TodoTableColumnRow from './TodoTableColumnRow';

const TodoTableColumns = (): React.ReactElement => {
  return (
    <thead>
      <TodoTableColumnRow />
    </thead>
  );
};

export default TodoTableColumns;
