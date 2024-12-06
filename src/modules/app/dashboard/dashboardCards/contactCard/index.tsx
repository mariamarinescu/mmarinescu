import clsx from 'clsx';
import { Card } from 'components/containers';
import ContactForm from 'modules/app/dashboard/dashboardCards/contactCard/ContactForm';
import { FormProvider, useForm } from 'react-hook-form';

interface ContactCardProps {
  className?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ className }) => {
  const methods = useForm();

  return (
    <Card className={clsx('w-full', className)} title="Write a message :)">
      <FormProvider {...methods}>
        <ContactForm />
      </FormProvider>
    </Card>
  );
};
