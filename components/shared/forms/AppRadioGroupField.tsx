import React from 'react';
import { Field, useField } from 'formik';
import clsx from 'clsx';
import { IRadioGroupComponentType } from '../types/IRadioGroupComponentType';
import { IAppRadioGroupFieldProps } from '../types/IAppRadioGroupFieldProps';

const AppRadioGroupField = (
  props: IAppRadioGroupFieldProps
): React.ReactElement => {
  const { label, name, components } = props;
  const [, meta] = useField(props);

  const hasError: boolean = !!(meta.touched && meta.error);

  return (
    <div className="form-control ">
      <label className="label pb15" htmlFor={name}>
        <span className="label-text text-gray-700">{label}</span>
      </label>

      <div className="flex flex-row gap-x-4">
        {components.map((component: IRadioGroupComponentType) => (
          <label className="label cursor-pointer flex flex-row items-start justify-start">
            <Field
              type="radio"
              value={component.value || ''}
              name={name}
              className={clsx('radio radio-bordered radio-primary', {
                'input-error': hasError
              })}
            />
            <span className="label-text ml-2 text-gray-700">
              {component.label || ''}
            </span>
          </label>
        ))}
      </div>
      {meta.touched && meta.error ? (
        <label className="label">
          <span className="label-text-alt text-error text-center">
            {meta.error}
          </span>
        </label>
      ) : null}
    </div>
  );
};

export default AppRadioGroupField;
