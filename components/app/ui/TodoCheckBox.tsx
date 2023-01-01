import React, { useState } from 'react';
import { ITodo } from '../types/ITodo';
import { ETodoStatus } from '../types/ETodoStatus';
import { useTodosFunctions } from '../api/useTodosFunctions';
import { MoonLoader } from 'react-spinners';

const TodoCheckBox = ({ todo }: { todo: ITodo }) => {
  const [checked, setChecked] = useState(todo.status === ETodoStatus.COMPLETED);
  const { changeTodoStatus, updating } = useTodosFunctions();

  const onStatusChanged = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkedValue = event.target.checked;
    setChecked((checked: boolean) => !checked);

    const status: ETodoStatus = checkedValue
      ? ETodoStatus.COMPLETED
      : ETodoStatus.PENDING;

    changeTodoStatus(todo.id, status);
  };

  return (
    <div
      className="tooltip tooltip-primary tooltip-right"
      data-tip={checked ? 'Mark As Pending' : 'Mark As Complete'}>
      <label>
        {updating ? (
          <div className="flex">
            <MoonLoader loading={true} size={20} color={'#e11d48'} />
          </div>
        ) : (
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={onStatusChanged}
          />
        )}
      </label>
    </div>
  );
};

export default TodoCheckBox;
