import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    isAttendingWithGuest: false,
    guestName: '',
  });

  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
    if (!values.age) errors.age = 'Age is required';
    else if (isNaN(values.age) || values.age <= 0) errors.age = 'Age must be a number greater than 0';
    if (values.isAttendingWithGuest && !values.guestName) errors.guestName = 'Guest name is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowSummary(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    showSummary,
  };
};

export default useForm;
