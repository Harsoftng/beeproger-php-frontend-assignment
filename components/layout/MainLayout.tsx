import React from 'react';
import Header from './Header';
import Content from './Content';
import { IMainLayoutProps } from './types/IMainLayoutProps';

const MainLayout = (props: IMainLayoutProps): React.ReactElement => {
  const { children } = props;

  return (
    <div className="flex items-start justify-start flex-col glass h-screen w-screen">
      <Header />

      <Content>{children}</Content>
    </div>
  );
};

export default MainLayout;
