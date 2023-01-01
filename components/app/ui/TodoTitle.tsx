import React from 'react';
import Image from 'next/image';
import { ITodo } from '../types/ITodo';
import TodoPriority from './TodoPriority';

const TodoTitle = ({ todo }: { todo: ITodo }) => {
  return (
    <div className="tooltip tooltip-primary" data-tip="View Todo">
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <Image
              src={todo.photoUrl || '/no-task-image.png'}
              alt="Avatar Tailwind CSS Component"
              layout="fill"
            />
          </div>
        </div>
        <div>
          <div className="font-bold">{todo.title}</div>
          <div className="text-sm text-left opacity-50 mt-1">
            Priority: <TodoPriority priority={todo.priority} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoTitle;
