import React from 'react';
import { ETodoPriority } from '../types/ETodoPriority';

const TodoPriority = ({ priority }: { priority: ETodoPriority }) => {
  const priorityUI = {
    [ETodoPriority.LOW]: (
      <div className="badge badge-primary font-bold text-xs capitalize">
        {priority.toLowerCase()}
      </div>
    ),
    [ETodoPriority.NORMAL]: (
      <div className="badge badge-warning font-bold text-xs capitalize">
        {priority.toLowerCase()}
      </div>
    ),
    [ETodoPriority.HIGH]: (
      <div className="badge badge-danger font-bold text-xs capitalize">
        {priority.toLowerCase()}
      </div>
    )
  };

  return <>{priorityUI[priority]}</>;
};

export default TodoPriority;
