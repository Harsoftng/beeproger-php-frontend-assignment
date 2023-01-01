import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAxiosClient } from '../../../store/hooks/utils/useAxiosClient';
import { todoActions } from '../../../store/slices/todo/todoSlice';
import { ETodoStatus } from '../types/ETodoStatus';
import { ITodo } from '../types/ITodo';

interface IChangeTodoStatusData {
  id: number;
  status: ETodoStatus;
}

interface IChangeTodoStatusOkResponse {
  data: ITodo;
}

export const changeTodoStatusApi = createAsyncThunk(
  'todo/changeTodoStatusApi',
  async (inputData: IChangeTodoStatusData, { dispatch }) => {
    try {
      const axiosClient = getAxiosClient();

      const response: IChangeTodoStatusOkResponse = await axiosClient.patch(
        `/api/todos/status/${inputData.id}/${inputData.status}`
      );

      console.log({ response });

      if (response?.data && response?.data?.title) {
        toast('Status Changed', { type: 'success' });
        dispatch(todoActions.updateTodo(response?.data));
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
