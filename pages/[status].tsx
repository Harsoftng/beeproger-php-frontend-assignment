import React from 'react';
import Todo from '../components/app/Todo';
import AppTitle from '../components/shared/misc/AppTitle';
import { useRouter } from 'next/router';

export default function HomeFilter(): React.ReactElement {
  const router = useRouter();
  const status: string = router.query?.status?.toString() || 'all';

  return (
    <>
      <AppTitle title="Welcome" />
      {/*// @ts-ignore*/}
      <Todo status={status} />
    </>
  );
}
