import React, { ReactElement } from 'react';
import { ITodoSectionTitleProps } from '../types/ITodoSectionTitleProps';
import clsx from 'clsx';

const TodoSectionTitle = (props: ITodoSectionTitleProps): ReactElement => {
  const { isAllMode, option } = props;

  return (
    <>
      {isAllMode && (
        <div className={clsx('', { 'mt-20': option.id === 2 })}>
          <div className="divider text-xl">
            {option.status === 'pending' ? 'Pending Tasks' : 'Completed Tasks'}
          </div>
        </div>
      )}
    </>
  );
};

export default TodoSectionTitle;
