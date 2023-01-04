import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { BeatLoader } from 'react-spinners';
import AppInputField from '../../shared/forms/AppInputField';
import Validators from '../../shared/utils/Validators';
import * as Yup from 'yup';
import AppTextAreaField from '../../shared/forms/AppTextAreaField';
import AppRadioGroupField from '../../shared/forms/AppRadioGroupField';
import { ITodo } from '../types/ITodo';
import { useTodosFunctions } from '../api/useTodosFunctions';
import { toast } from 'react-toastify';
import { IFormInitialValues } from '../types/IFormInitialValues';

const TodoForm = ({
  todo,
  mode
}: {
  todo?: ITodo;
  mode: 'edit' | 'create';
}): React.ReactElement => {
  const { createTodo, editTodo, updating } = useTodosFunctions();
  const [taskImage, setTaskImage] = useState<File>();

  const initialValues: IFormInitialValues = {
    title: todo?.title || '',
    description: todo?.description || '',
    priority: todo?.priority || 'LOW',
    status: todo?.status || 'PENDING',
    startDate: todo?.startDate || ''
  };

  const validationScheme = Yup.object({
    title: Validators.validateString(true),
    description: Validators.validateString(false),
    priority: Validators.validateString(true),
    status: Validators.validateString(true),
    startDate: Validators.validateString(false)
  });

  async function submitFormHandler(values: IFormInitialValues): Promise<void> {
    if (mode === 'edit' && !todo?.id) {
      toast('Invalid form input, select a valid todo to update!', {
        type: 'error'
      });
      return;
    }

    if (mode === 'edit') {
      await editTodo({ ...values, photoUpload: taskImage, id: todo?.id || 0 });
    } else {
      await createTodo({ ...values, photoUpload: taskImage });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitFormHandler}
      validationSchema={validationScheme}>
      {() => (
        <Form autoComplete="no" autoCorrect="yes">
          <div className="flex flex-col gap-y-4 login-form-box">
            <div className="w-full">
              <AppInputField
                label="Title"
                name="title"
                type="text"
                placeholder="Enter Title"
              />
            </div>

            <div className="w-full">
              <AppTextAreaField
                label="Description"
                name="description"
                placeholder="Enter Description"
              />
            </div>

            <div className="w-full">
              <AppRadioGroupField
                label="Priority"
                name="priority"
                components={[
                  { label: 'Low', value: 'LOW' },
                  { label: 'Normal', value: 'NORMAL' },
                  { label: 'High', value: 'HIGH' }
                ]}
              />
            </div>

            <div className="w-full">
              <AppRadioGroupField
                label="Status"
                name="status"
                components={[
                  { label: 'Pending', value: 'PENDING' },
                  { label: 'Completed', value: 'COMPLETED' }
                ]}
              />
            </div>

            <div className="w-full">
              <AppInputField
                label="Date"
                name="startDate"
                type="datetime-local"
                placeholder="Select Start Date"
              />
            </div>

            <div className="flex items-start justify-start flex-col w-full mb-5">
              <label className="label pb15" htmlFor="photoUpload">
                <span className="label-text text-gray-700">Upload Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered"
                name="photoUpload"
                id="photoUpload"
                accept="images/*"
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  // @ts-ignore
                  if (evt?.target?.files?.length > 0) {
                    // @ts-ignore
                    setTaskImage(evt.target.files[0]);
                  }
                }}
              />
            </div>

            <div>
              <button
                disabled={updating}
                type="submit"
                className="btn btn-pill w-full btn-lg btn-warning text-capitalize poppins-font p30">
                {updating ? (
                  <div className="pt5">
                    <BeatLoader color="#292524" loading={true} />
                  </div>
                ) : (
                  <>{mode === 'edit' ? 'Edit Task' : 'Create Task'}</>
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
