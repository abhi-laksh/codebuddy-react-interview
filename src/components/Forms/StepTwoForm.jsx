import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const StepTwoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log('errors', errors);

  return (
    <>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          {...register('firstName', {
            required: 'First name is required',
            minLength: {
              value: 2,
              message: 'First name must have a minimum length of 2 characters',
            },
            maxLength: {
              value: 50,
              message: 'First name must have a maximum length of 50 characters',
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'First name must only contain alphabets',
            },
          })}
          isInvalid={errors.firstName}
        />
        {errors.firstName && (
          <Form.Control.Feedback type="invalid">{errors.firstName.message}</Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Last name must only contain alphabets',
            },
          })}
          isInvalid={errors.lastName}
        />
        {errors.lastName && (
          <Form.Control.Feedback type="invalid">{errors.lastName.message}</Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter address"
          {...register('address', {
            required: 'Address is required',
            minLength: {
              value: 10,
              message: 'Address must have a minimum length of 10 characters',
            },
          })}
          isInvalid={errors.address}
        />
        {errors.address && (
          <Form.Control.Feedback type="invalid">{errors.address.message}</Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};

export default StepTwoForm;
