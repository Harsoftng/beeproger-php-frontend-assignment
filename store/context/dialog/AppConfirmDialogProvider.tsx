import React, { useState } from 'react';
import AppConfirmDialog from '../../../components/shared/dialogs/AppConfirmDialog';

interface IAppOpenConfirmDialogProps {
  title: string;
  type: string;
  okText: string;
  cancelText: string;
  message: string;

  // eslint-disable-next-line no-unused-vars
  actionCallback: (f: any) => void;
}

interface IGetConfirmationProps {
  title: string;
  type: string;
  okText: string;
  cancelText: string;
  message: string;
}

const defaultParams: IAppOpenConfirmDialogProps = {
  title: '',
  type: '',
  okText: '',
  cancelText: '',
  message: '',
  actionCallback: (f) => f
};

interface IAppConfirmDialogContextProps {
  // eslint-disable-next-line no-unused-vars
  openDialog?: (props: IAppOpenConfirmDialogProps) => void;
  dialogConfig?: IAppOpenConfirmDialogProps;
  onDismiss?: () => void;
}

export const AppConfirmDialogContext =
  React.createContext<IAppConfirmDialogContextProps>({});

export const AppConfirmDialogProvider = ({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState(defaultParams);

  const openDialog = ({
    title,
    type,
    okText,
    cancelText,
    message,
    actionCallback
  }: IAppOpenConfirmDialogProps) => {
    setDialogOpen(true);
    setDialogConfig({
      title,
      type,
      okText,
      cancelText,
      message,
      actionCallback
    });
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setDialogConfig(defaultParams);
  };

  const onConfirm = () => {
    closeDialog();
    dialogConfig.actionCallback(true);
  };

  const onDismiss = () => {
    closeDialog();
    dialogConfig.actionCallback(false);
  };

  return (
    <AppConfirmDialogContext.Provider
      value={{ openDialog, dialogConfig, onDismiss }}>
      <AppConfirmDialog
        open={dialogOpen}
        title={dialogConfig.title}
        type={dialogConfig.type}
        okText={dialogConfig.okText}
        cancelText={dialogConfig.cancelText}
        message={dialogConfig.message}
        onOkClick={onConfirm}
        onCancelClick={onDismiss}
      />
      {children}
    </AppConfirmDialogContext.Provider>
  );
};

export const useAppConfirmDialog = () => {
  const { openDialog, onDismiss } = React.useContext(AppConfirmDialogContext);

  const getConfirmation = (options: IGetConfirmationProps) =>
    new Promise((res) => {
      // @ts-ignore
      openDialog({ actionCallback: res, ...options });
    });

  const closeDialog = () =>
    new Promise(() => {
      if (onDismiss) {
        onDismiss();
      }
    });

  return { getConfirmation, closeDialog };
};
