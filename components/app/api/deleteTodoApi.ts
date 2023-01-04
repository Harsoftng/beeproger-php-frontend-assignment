import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAxiosClient } from '../../../store/hooks/utils/useAxiosClient';
import { todoActions } from '../../../store/slices/todo/todoSlice';

interface IDeleteTodoData {
  id: number;
}

interface IDeleteTodoOkResponse {
  data: {
    status?: boolean;
    message?: string;
  };
}

export const deleteTodoApi = createAsyncThunk(
  'todo/deleteTodoApi',
  async (inputData: IDeleteTodoData, { dispatch }) => {
    try {
      const axiosClient = getAxiosClient();

      const response: IDeleteTodoOkResponse = await axiosClient.delete(
        `/api/todos/${inputData.id}`
      );

      if (response?.data?.status && response?.data?.message) {
        toast(response?.data?.message, { type: 'success' });
        dispatch(todoActions.deleteTodo(inputData.id));
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
