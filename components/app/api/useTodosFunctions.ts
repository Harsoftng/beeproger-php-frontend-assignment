import { useState } from 'react';
import useShowConfirmDialog from '../../../store/hooks/useShowConfirmDialog';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { deleteTodoApi } from './deleteTodoApi';
import { todoActions } from '../../../store/slices/todo/todoSlice';
import { ETodoDialogView } from '../../../store/types/ETodoDialogView';
import { ETodoStatus } from '../types/ETodoStatus';
import { changeTodoStatusApi } from './changeTodoStatusApi';
import { IFormInitialValues } from '../types/IFormInitialValues';
import { createTodoApi } from './createTodoApi';

export const useTodosFunctions = () => {
  const dispatch = useAppDispatch();
  const { showConfirmDialog } = useShowConfirmDialog();
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const deleteTodo = async (id: number) => {
    setDeleting(true);
    if (!id) {
      setDeleting(false);
      return;
    }
    const confirmed = await showConfirmDialog(
      'Are you sure you want to delete this task? This cannot be undone.'
    );

    if (!confirmed) {
      setDeleting(false);
      return;
    }

    await dispatch(deleteTodoApi({ id }));

    setDeleting(false);
  };

  const changeTodoStatus = async (id: number, status: ETodoStatus) => {
    setUpdating(true);
    if (!status) {
      setUpdating(false);
      return;
    }

    await dispatch(changeTodoStatusApi({ id, status }));

    setUpdating(false);
  };

  const createTodo = async (
    values: IFormInitialValues & { photoUpload?: File }
  ) => {
    setUpdating(true);
    if (!values) {
      setUpdating(false);
      return;
    }

    await dispatch(createTodoApi({ ...values }));
    setUpdating(false);
  };

  const closeDialog = () => {
    dispatch(todoActions.closeTodoDialog());
  };

  const openEditTodoDialog = (id: number) => {
    dispatch(todoActions.setSelectedTodoId(id));
    dispatch(todoActions.setView(ETodoDialogView.Edit_Todo_View));
    dispatch(todoActions.openTodoDialog());
  };

  const openViewTodoDialog = (id: number) => {
    dispatch(todoActions.setSelectedTodoId(id));
    dispatch(todoActions.setView(ETodoDialogView.View_Todo_View));
    dispatch(todoActions.openTodoDialog());
  };

  const openCreateTodoDialog = () => {
    dispatch(todoActions.setSelectedTodoId(0));
    dispatch(todoActions.setView(ETodoDialogView.Create_Todo_View));
    dispatch(todoActions.openTodoDialog());
  };

  return {
    deleteTodo,
    createTodo,
    deleting,
    closeDialog,
    openEditTodoDialog,
    openViewTodoDialog,
    openCreateTodoDialog,
    changeTodoStatus,
    updating
  };
};
