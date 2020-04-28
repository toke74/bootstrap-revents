import React from 'react';
import { Form } from 'react-bootstrap';

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Group>
      <Form.Control
        as="textarea"
        rows={rows}
        {...input}
        placeholder={placeholder}
        type={type}
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

export default TextArea;
