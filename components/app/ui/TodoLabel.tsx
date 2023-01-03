import React from 'react';

const TodoLabel = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="text-left min-w-full pr-3 mt-2">
      <div className="font-extrabold text-gray-600">{label}</div>
      <div className="text-gray-900 text-sm">{value || '-N/A-'}</div>
      <div className=" border-b-accent border-b-2 border-dotted mt-1 min-w-full"></div>
    </div>
  );
};

export default TodoLabel;
