import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const StepOneForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log('errors', errors);

  return (
    <>
      <Form.Group controlId="emailId">
        <Form.Label>Email ID</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register('emailId', {
            required: 'Email ID is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email ID',
            },
          })}
          isInvalid={errors.emailId}
        />
        {errors.emailId && (
          <Form.Control.Feedback type="invalid">{errors.emailId.message}</Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value:
                /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/,
              message:
                'Password must contain minimum 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 special characters',
            },
          })}
          isInvalid={errors.password}
        />
        {errors.password && (
          <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};

export default StepOneForm;
