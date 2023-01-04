import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAxiosClient } from '../../../store/hooks/utils/useAxiosClient';
import { todoActions } from '../../../store/slices/todo/todoSlice';
import { IFormInitialValues } from '../types/IFormInitialValues';
import { ITodo } from '../types/ITodo';

interface ICreateTodoOkResponse {
  data: {
    data: ITodo;
  };
}
interface ICreateTodoData extends IFormInitialValues {
  photoUpload?: File;
}

export const createTodoApi = createAsyncThunk(
  'todo/createTodoApi',
  async (inputData: ICreateTodoData, { dispatch }) => {
    try {
      const axiosClient = getAxiosClient();

      const { photoUpload, status, priority, title, startDate, description } =
        inputData;

      const formData = new FormData();
      formData.append('status', status || '');
      formData.append('priority', priority || '');
      formData.append('title', title || '');
      formData.append('startDate', startDate || '');
      formData.append('description', description || '');

      if (photoUpload) {
        formData.append('photoUpload', photoUpload);
      }

      const response: ICreateTodoOkResponse = await axiosClient.post(
        `/api/todos`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );

      if (response?.data?.data && response?.data?.data?.title) {
        toast('Success', { type: 'success' });
        dispatch(todoActions.closeTodoDialog());
        dispatch(todoActions.addTodo(response?.data?.data));
      } else {
        // @ts-ignore
        toast(response?.data?.message, { type: 'error' });
      }
    } catch (error: any) {
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
