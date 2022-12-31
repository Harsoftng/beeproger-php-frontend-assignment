import React from 'react';
import { useAppFullscreenDialog } from '../context/dialog/AppFullScreenDialogProvider';

export default function useShowDialog() {
  const { openFullscreenDialog } = useAppFullscreenDialog();
  const showDialog = (content: React.ReactElement, name: string) => {
    openFullscreenDialog({
      title: `${name}`,
      content: content
    });
  };

  return { showDialog, openFullscreenDialog };
}
