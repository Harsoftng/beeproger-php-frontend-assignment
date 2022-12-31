import { useAppConfirmDialog } from '../context/dialog/AppConfirmDialogProvider';

export default function useShowConfirmDialog() {
  const { getConfirmation } = useAppConfirmDialog();
  const showConfirmDialog = async (
    message = 'Are you sure you would like to proceed?',
    title = '',
    type = 'warning',
    okText = 'Proceed',
    cancelText = 'Cancel'
  ) => {
    return getConfirmation({
      title,
      type,
      okText,
      cancelText,
      message
    });
  };

  return { showConfirmDialog, getConfirmation };
}
