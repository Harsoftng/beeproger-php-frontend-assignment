import React, { Fragment } from 'react';
import useTodoState from '../../../store/hooks/todo/useTodoState';
import { Dialog, Transition } from '@headlessui/react';
import { useTodosFunctions } from '../api/useTodosFunctions';
import { ETodoDialogView } from '../../../store/types/ETodoDialogView';
import ViewTodoUI from './ViewTodoUI';
import EditTodoUI from './EditTodoUI';
import { useGetSingleTodoAPI } from '../api/useGetSingleTodoAPI';
import { BeatLoader } from 'react-spinners';
import CreateTodoUI from './CreateTodoUI';

const TodoDialogUI = () => {
  const { dialogIsOpen, view, selectedTodoId } = useTodoState();
  const { closeDialog } = useTodosFunctions();
  const { isLoading, todo } = useGetSingleTodoAPI(selectedTodoId || 0);

  console.log({ selectedTodoId, todo });

  return (
    <Transition appear show={dialogIsOpen} as={Fragment}>
      <Dialog open={dialogIsOpen} onClose={closeDialog}>
        <div
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
          onClick={closeDialog}
        />
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

        <div className="fixed inset-0 overflow-y-auto glass">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            {isLoading || todo?.id !== selectedTodoId ? (
              <div className="p-10">
                <BeatLoader loading={true} />
              </div>
            ) : (
              <>
                {todo &&
                  todo.id === selectedTodoId &&
                  view === ETodoDialogView.View_Todo_View && (
                    <ViewTodoUI todo={todo} />
                  )}

                {todo &&
                  todo.id === selectedTodoId &&
                  view === ETodoDialogView.Edit_Todo_View && (
                    <EditTodoUI todo={todo} />
                  )}

                {view === ETodoDialogView.Create_Todo_View && <CreateTodoUI />}
              </>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TodoDialogUI;
