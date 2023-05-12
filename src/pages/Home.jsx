import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MultiStepForm from '../components/Forms/MultiStepForm';

const Home = () => {
  const methods = useForm();

  const navigate = useNavigate();

  const onSubmit = data => {
    // navigate('/posts')

    console.log(data);
  };

  return (
    <main>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <MultiStepForm steps />
        </Form>
      </FormProvider>
    </main>
  );
};

export default Home;
