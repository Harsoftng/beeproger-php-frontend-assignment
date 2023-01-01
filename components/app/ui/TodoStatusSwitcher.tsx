import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import useTodoState from '../../../store/hooks/todo/useTodoState';

const TodoStatusSwitcher = () => {
  const { currentStatus: status } = useTodoState();

  return (
    <div className="tabs tabs-boxed">
      <Link
        href={'/'}
        passHref={true}
        prefetch={true}
        className={clsx('tab px-9', { 'tab-active': status === 'all' })}>
        All
      </Link>

      <Link
        href={'/pending'}
        passHref={true}
        prefetch={true}
        className={clsx('tab', { 'tab-active': status === 'pending' })}>
        Pending
      </Link>

      <Link
        href={'/completed'}
        passHref={true}
        prefetch={true}
        className={clsx('tab', { 'tab-active': status === 'completed' })}>
        Completed
      </Link>
    </div>
  );
};

export default TodoStatusSwitcher;
