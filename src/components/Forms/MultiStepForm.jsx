import { useState } from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import StepOneForm from './StepOneForm';

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { handleSubmit } = useFormContext();

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
    console.log('handleNext', activeStep);
  };

  const handleSave = () => {
    // setActiveStep(prevStep => prevStep + 1);
    console.log('handleSave', activeStep);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
    console.log('handleBack', activeStep);
  };

  const handleTabChange = index => {
    setActiveStep(index);
  };

  const onSubmit = data => {
    // Handle form submission
    console.log(data);
  };

  return (
    <Container>
      <Tabs activeKey={activeStep} onSelect={handleTabChange}>
        <Tab eventKey={0} title="Form 1">
          <StepOneForm />
        </Tab>
        <Tab eventKey={1} title="Form 2">
          {/* <StepOneForm /> */}
        </Tab>
        <Tab eventKey={2} title="Form 3">
          {/* <StepOneForm /> */}
        </Tab>
      </Tabs>
      <div className="buttons">
        <Button
          className="ml-3"
          variant="secondary"
          disabled={activeStep <= 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button className="ml-3" variant="primary" onClick={handleSubmit(handleNext)}>
          Save
        </Button>
        <Button className="ml-3" variant="primary" onClick={handleSubmit(handleSave)}>
          Save and Next
        </Button>
      </div>
    </Container>
  );
};

export default MultiStepForm;
