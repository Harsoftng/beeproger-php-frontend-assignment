import React from 'react';

const TodoTableColumnRow = () => {
  return (
    <tr>
      <th style={{ width: '10%' }}>
        <label>{/*<input type="checkbox" className="checkbox" />*/}</label>
      </th>
      <th className="w-3/5">Title</th>
      <th className="w-1/5">Start Date</th>
      <th className="w-1/5">Start Time</th>
      <th className="w-1/5">Actions</th>
    </tr>
  );
};

export default TodoTableColumnRow;
