import React from 'react';
import { IContentProps } from './types/IContentProps';

const Content = (props: IContentProps): React.ReactElement => {
  const { children } = props;
  return <div className="mt-8">{children}</div>;
};

export default Content;
