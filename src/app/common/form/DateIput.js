import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateIput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Group>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={(e) => e.preventDefault()}
      />

      {touched &&
      error && (
        <Form.Control.Feedback
          className="touched-error-validate"
          type={touched && error}
        >
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default DateIput;
