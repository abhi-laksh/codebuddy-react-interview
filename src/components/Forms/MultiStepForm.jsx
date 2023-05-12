import { useState } from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { SUBMIT_POST_DATA_URL } from '../../constants/endpoints';
import StepOneForm from './StepOneForm';
import StepThreeForm from './StepThreeForm';
import StepTwoForm from './StepTwoForm';

const MultiStepForm = ({ onSuccess }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentData, setCurrentData] = useState({});
  const [formStatusByStep, setFormStatusByStep] = useState({});
  const { handleSubmit, formState } = useFormContext();

  const handleNext = () => {
    setActiveStep(prevStep => Number(prevStep) + 1);
    console.log('handleNext', activeStep);
  };

  const handleSave = data => {
    // setActiveStep(prevStep => Number(prevStep) + 1);
    setCurrentData(state => ({ ...state, ...data }));
    alert('Form Saved!');
  };

  const handleBack = () => {
    setActiveStep(prevStep => Number(prevStep) - 1);
    console.log('handleBack', activeStep);
  };

  const handleTabChange = index => () => {
    setActiveStep(index);
  };

  const onSubmit = data => {
    // Handle form submission

    const { acceptTermsAndCondition, ...dataToSend } = data;

    fetch(SUBMIT_POST_DATA_URL, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(response => {
        console.log('Response:', response);

        if (response?.data) {
          typeof onSuccess === 'function' && onSuccess();
        }
        // Process the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });

    console.log('data', data);
  };

  console.log('ACTIVE', activeStep, formState);

  return (
    <Container className="p-3">
      <Tabs
        activeKey={activeStep}
        unmountOnExit
        onSelect={index => {
          if (index > activeStep) {
            handleSubmit(handleTabChange(index))();
          } else {
            handleTabChange(index)();
          }
        }}
      >
        <Tab eventKey={0} title="Form 1">
          <StepOneForm />
        </Tab>
        <Tab disabled={activeStep < 1} eventKey={1} title="Form 2">
          <StepTwoForm />
        </Tab>
        <Tab disabled={activeStep < 2} eventKey={2} title="Form 3">
          <StepThreeForm />
        </Tab>
      </Tabs>
      <div className="mt-3">
        <Button
          className="me-2"
          variant="secondary"
          disabled={activeStep <= 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className="me-2"
          variant="primary"
          onClick={handleSubmit(activeStep >= 2 ? onSubmit : handleSave)}
        >
          Save
        </Button>
        <Button
          className="me-2"
          variant="primary"
          disabled={activeStep >= 2}
          onClick={handleSubmit(handleNext)}
        >
          Save and Next
        </Button>
      </div>
    </Container>
  );
};

export default MultiStepForm;
