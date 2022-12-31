import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { IAppConfirmDialogProps } from '../types/IAppConfirmDialogProps';

export default function AppConfirmDialog(
  props: IAppConfirmDialogProps
): React.ReactElement {
  const {
    type,
    message,
    open = false,
    okText = 'Ok',
    cancelText = 'Cancel',
    onOkClick = (f) => f,
    onCancelClick = (f) => f
  } = props;

  let okButtonClass: string;

  switch (type) {
    case 'warning':
      okButtonClass = 'btn-warning';
      break;
    case 'info':
      okButtonClass = 'btn-first';
      break;
    case 'error':
      okButtonClass = 'btn-danger';
      break;
    case 'success':
      okButtonClass = 'btn-success';
      break;
    default:
      okButtonClass = 'btn-first';
      break;
  }

  return (
    <React.Fragment>
      <Transition appear show={open} as={Fragment}>
        <Dialog open={open} onClose={onCancelClick}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{message}</p>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{message}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={onOkClick}
                      className={clsx('btn mt-30', okButtonClass)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className="btn-wrapper--label fs16">{okText}</span>
                    </button>

                    <button onClick={onCancelClick} className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="btn-wrapper--label fs16">
                        {cancelText}
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
}
