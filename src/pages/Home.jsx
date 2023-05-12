import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MultiStepForm from '../components/Forms/MultiStepForm';

const Home = () => {
  const methods = useForm();

  const navigate = useNavigate();

  const onSuccess = () => {
    navigate('/posts');
  };

  return (
    <main>
      <FormProvider {...methods}>
        <Form>
          <MultiStepForm onSuccess={onSuccess} />
        </Form>
      </FormProvider>
    </main>
  );
};

export default Home;
