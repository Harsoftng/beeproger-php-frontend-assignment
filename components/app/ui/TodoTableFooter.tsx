import React from 'react';
import TodoTableColumnRow from './TodoTableColumnRow';

const TodoTableFooter = (): React.ReactElement => {
  return (
    <tfoot>
      <TodoTableColumnRow />
    </tfoot>
  );
};

export default TodoTableFooter;
