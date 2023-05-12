import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const StepThreeForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log('errors', errors);

  return (
    <>
      <Form.Group controlId="countryCode">
        <Form.Label>Country Code</Form.Label>
        <Form.Control
          as="select"
          {...register('countryCode', {
            required: 'Country code is required',
          })}
          isInvalid={errors.countryCode}
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </Form.Control>
        {errors.countryCode && (
          <Form.Control.Feedback type="invalid">{errors.countryCode.message}</Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          {...register('phoneNumber', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be a 10-digit numeric value',
            },
          })}
          isInvalid={errors.phoneNumber}
        />
        {errors.phoneNumber && (
          <Form.Control.Feedback type="invalid">{errors.phoneNumber.message}</Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="acceptTermsAndCondition">
        <Form.Check
          type="checkbox"
          label="I accept the terms and conditions"
          {...register('acceptTermsAndCondition', {
            required: 'Please accept the terms and conditions',
          })}
          isInvalid={errors.acceptTermsAndCondition}
        />
        {errors.acceptTermsAndCondition && (
          <Form.Control.Feedback type="invalid">
            {errors.acceptTermsAndCondition.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};

export default StepThreeForm;
