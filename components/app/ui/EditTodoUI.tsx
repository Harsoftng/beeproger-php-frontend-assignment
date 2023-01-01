import React from 'react';
import { useTodosFunctions } from '../api/useTodosFunctions';
import { ITodo } from '../types/ITodo';

const EditTodoUI = ({ todo }: { todo: ITodo }) => {
  const { closeDialog } = useTodosFunctions();
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="card w-3/4 bg-base-100 shadow-xl rounded-b-none p-5 flex items-center justify-between flex-row">
        Edit Todo
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
      <div className="card w-3/4 glass shadow-xl rounded-t-none">
        <figure className="px-10 pt-10">
          <img
            src={todo.photoUrl || '/'}
            alt="Shoes"
            className="rounded-xl w-[100%] aspect-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodoUI;
