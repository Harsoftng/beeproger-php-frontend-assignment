import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAxiosClient } from '../../../store/hooks/utils/useAxiosClient';
import { todoActions } from '../../../store/slices/todo/todoSlice';
import { IFormInitialValues } from '../types/IFormInitialValues';
import { ITodo } from '../types/ITodo';

interface IEditTodoOkResponse {
  data: {
    data: ITodo;
  };
}
interface IEditTodoData extends IFormInitialValues {
  photoUpload?: File;
  id: number;
}

export const editTodoApi = createAsyncThunk(
  'todo/editTodoApi',
  async (inputData: IEditTodoData, { dispatch }) => {
    try {
      const axiosClient = getAxiosClient();

      const {
        id,
        photoUpload,
        status,
        priority,
        title,
        startDate,
        description
      } = inputData;

      const formData = new FormData();
      formData.append('status', status || '');
      formData.append('priority', priority || '');
      formData.append('title', title || '');
      formData.append('startDate', startDate || '');
      formData.append('description', description || '');
      formData.append('_method', 'PUT');
      formData.append('id', id?.toString());

      if (photoUpload) {
        formData.append('photoUpload', photoUpload);
      }

      const response: IEditTodoOkResponse = await axiosClient.post(
        `/api/todos/${id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );
      console.log({ resp: response });

      if (response?.data?.data && response?.data?.data?.title) {
        console.log({ response });
        toast('Success', { type: 'success' });
        dispatch(todoActions.closeTodoDialog());
        dispatch(todoActions.updateTodo(response?.data?.data));
      } else {
        // @ts-ignore
        toast(response?.data?.message, { type: 'error' });
      }
    } catch (error: any) {
      console.log({ error });

      if (!error?.response) {
        toast('Network Error! Could not contact Beeproger Servers!', {
          type: 'error'
        });
      } else {
        toast(error?.response?.data?.message, { type: 'error' });
      }
    }
  }
);
