import * as Yup from 'yup';

export const validateString = (
  required = true,
  min = 2,
  max = 255,
  message = 'A value is required!'
) => {
  let schema = Yup.string()
    .min(min, 'Value must be ' + min + ' characters or more!')
    .max(max, 'Value must be ' + max + ' characters or less!');
  if (required) {
    schema = schema.required(message);
  }
  return schema;
};

export const validateAutoComplete = (msg = 'Please select a value!') => {
  return Yup.object().shape({
    value: Yup.string().required(msg),
    text: Yup.string().required(msg)
  });
};

export const validateSelect = (required = true) => {
  let schema = Yup.string();
  if (required) {
    schema = schema.required('Please select a value!');
  }
  return schema;
};

const Validators = {
  validateString,
  validateAutoComplete,
  validateSelect
};
export default Validators;
