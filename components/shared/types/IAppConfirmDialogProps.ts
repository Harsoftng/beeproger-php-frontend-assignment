export interface IAppConfirmDialogProps {
  type: string;
  title?: string;
  message: string;
  open: boolean;
  okText?: string;
  cancelText?: string;

  // eslint-disable-next-line no-unused-vars
  onOkClick?: (f: any) => void;

  // eslint-disable-next-line no-unused-vars
  onCancelClick?: (f: any) => void;
}
