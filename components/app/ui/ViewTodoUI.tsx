import React from 'react';
import { ITodo } from '../types/ITodo';
import { useTodosFunctions } from '../api/useTodosFunctions';
import TodoLabel from './TodoLabel';
import Utilities from '../../shared/utils/Utilities';

const ViewTodoUI = ({ todo }: { todo: ITodo }) => {
  const { closeDialog, openEditTodoDialog } = useTodosFunctions();

  return (
    <div className="flex items-center justify-center flex-col min-w-[100%]">
      <div className="card lg:min-w-[50%] xl:min-w-[40%] md:min-w-[80%] sm:min-w-[90%] min-w-[90%] bg-base-100 shadow-xl rounded-b-none p-5 flex items-center justify-between flex-row">
        View Todo
        <button className="btn btn-ghost" onClick={closeDialog}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div className="card lg:min-w-[50%] xl:min-w-[40%] md:min-w-[80%] sm:min-w-[90%] min-w-[90%] bg-gray-300 shadow-xl rounded-t-none">
        <div className="flex items-start justify-start gap-0">
          <div className="flex flex-col w-[45%]">
            <figure className="px-5 pt-5 w-full mb-6">
              <img
                src={todo.photoUrl || '/no-task-image.png'}
                alt="Shoes"
                className="rounded-xl object-fill h-[250px] w-80"
              />
            </figure>

            <button
              className="btn btn-primary mx-5"
              onClick={() => openEditTodoDialog(todo.id)}>
              Edit
            </button>
          </div>
          <div className="flex flex-col w-[55%] py-5">
            <TodoLabel label="Title" value={todo.title} />
            <TodoLabel label="Description" value={todo.description} />
            <TodoLabel label="Priority" value={todo.priority} />
            <TodoLabel label="Status" value={todo.status} />
            <TodoLabel
              label="Start Date"
              value={Utilities.getUserFriendlyDate(todo.startDate)}
            />
            <TodoLabel
              label="Start Time"
              value={Utilities.getUserFriendlyTime(todo.startDate)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTodoUI;
