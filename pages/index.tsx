import React from 'react';
import Todo from '../components/app/Todo';
import AppTitle from '../components/shared/misc/AppTitle';

export default function Home(): React.ReactElement {
  return (
    <>
      <AppTitle title="Welcome" />
      {/*// @ts-ignore*/}
      <Todo status={'all'} />
    </>
  );
}
