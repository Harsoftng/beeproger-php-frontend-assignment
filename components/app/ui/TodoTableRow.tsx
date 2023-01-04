import React from 'react';
import { ITodo } from '../types/ITodo';
import TodoTitle from './TodoTitle';
import Utilities from '../../shared/utils/Utilities';
import TodoActions from './TodoActions';
import clsx from 'clsx';
import { ETodoPriority } from '../types/ETodoPriority';
import TodoCheckBox from './TodoCheckBox';

const TodoTableRow = ({ todo }: { todo: ITodo }): React.ReactElement => {
  return (
    <tr
      className={clsx('border-l-4', {
        'border-red-800': todo.priority === ETodoPriority.HIGH,
        'border-orange-300': todo.priority === ETodoPriority.NORMAL,
        'border-cyan-300': todo.priority === ETodoPriority.LOW
      })}>
      <td>
        <TodoCheckBox todo={todo} />
      </td>
      <td>
        <TodoTitle todo={todo} />
      </td>
      <td>
        <small>
          {Utilities.getUserFriendlyDate(todo.startDate) || '-N/A-'}
        </small>
      </td>
      <td>
        <small>
          {Utilities.getUserFriendlyTime(todo.startDate) || '-N/A-'}
        </small>
      </td>
      <th>
        <TodoActions todo={todo} />
      </th>
    </tr>
  );
};

export default TodoTableRow;
