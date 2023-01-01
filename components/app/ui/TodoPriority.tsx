import React from 'react';
import { ETodoPriority } from '../types/ETodoPriority';

const TodoPriority = ({ priority }: { priority: ETodoPriority }) => {
  const priorityUI = {
    [ETodoPriority.LOW]: (
      <div className="badge bg-cyan-500 font-bold text-xs capitalize">
        {priority.toLowerCase()}
      </div>
    ),
    [ETodoPriority.NORMAL]: (
      <div className="badge bg-orange-500 font-bold text-xs capitalize">
        {priority.toLowerCase()}
      </div>
    ),
    [ETodoPriority.HIGH]: (
      <div className="badge bg-red-900 font-bold text-xs capitalize">
        {priority.toLowerCase()}
      </div>
    )
  };

  return <>{priorityUI[priority]}</>;
};

export default TodoPriority;
