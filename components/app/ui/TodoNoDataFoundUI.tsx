import React from 'react';
import Image from 'next/image';
import CreateTaskButton from './CreateTaskButton';

const TodoNoDataFoundUI = (): React.ReactElement => {
  return (
    <tr>
      <td colSpan={5}>
        <div className="flex items-center justify-center flex-col h-4/5 gap-8">
          <Image
            alt="No Data Found"
            src={'/task-icon.png'}
            width={300}
            height={200}
          />
          <h4>No Tasks Found</h4>

          <CreateTaskButton />
        </div>
      </td>
    </tr>
  );
};

export default TodoNoDataFoundUI;
