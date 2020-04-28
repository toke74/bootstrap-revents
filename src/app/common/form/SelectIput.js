import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

const SelectIput = ({
  input,
  width,
  type,
  defaultValue,
  placeholder,
  multiple,
  options,
  meta: { touched, error },
}) => {
  return (
    <Form.Group>
      <Select
        // {...input}
        // value={input.value || null}
        onChange={(value) => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        // options={options}
        // placeholder={placeholder}
        value={input.value || null}
        // onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
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

export default SelectIput;
