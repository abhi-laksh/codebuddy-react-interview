import { useState } from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { COMPLETED } from '../../constants/status';
import StepOneForm from './StepOneForm';
import StepThreeForm from './StepThreeForm';
import StepTwoForm from './StepTwoForm';

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentData, setCurrentData] = useState({});
  const [formStatusByStep, setFormStatusByStep] = useState({});
  const { handleSubmit, formState } = useFormContext();

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
    console.log('handleNext', activeStep);
  };

  const handleSave = data => {
    // setActiveStep(prevStep => prevStep + 1);
    setCurrentData(state => ({ ...state, ...data }));
    setFormStatusByStep(state => ({ ...state, [activeStep]: COMPLETED }));

    alert('Form Saved!');
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
    console.log('handleBack', activeStep);
  };

  const handleTabChange = index => () => {
    setActiveStep(index);
  };

  const onSubmit = data => {
    // Handle form submission
    console.log(data);
  };

  console.log('ACTIVE', activeStep, formState);

  return (
    <Container>
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
        <Tab eventKey={1} title="Form 2">
          <StepTwoForm />
        </Tab>
        <Tab eventKey={2} title="Form 3">
          <StepThreeForm />
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
        <Button className="ml-3" variant="primary" onClick={handleSubmit(handleSave)}>
          Save
        </Button>
        <Button
          className="ml-3"
          variant="primary"
          disabled={activeStep >= 2}
          onClick={handleSubmit(activeStep >= 2 ? onSubmit : handleNext)}
        >
          Save and Next
        </Button>
      </div>
    </Container>
  );
};

export default MultiStepForm;
