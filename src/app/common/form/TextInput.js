import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Group>
      <Form.Control {...input} placeholder={placeholder} type={type} />
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

export default TextInput;
