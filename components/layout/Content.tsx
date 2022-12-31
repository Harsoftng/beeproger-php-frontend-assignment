import React from 'react';
import { IContentProps } from './types/IContentProps';

const Content = (props: IContentProps): React.ReactElement => {
  const { children } = props;
  return (
    <div className="pt-8 bg-gray dark:glass h-screen w-screen">{children}</div>
  );
};

export default Content;
