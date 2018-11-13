export const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'this field is required';
  }

  return errors;
};

export const required = value => (value ? undefined : 'Required');
export const maxlength = max => value => (value && value.length > max ? `Must be ${max} character or less` : undefined);
// export const sSN = value => value && !^\d{6}-\d{3}[a-zA-Z]$/i.test(value) ? 'invalid Social Security Number' :undefined;
export const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
