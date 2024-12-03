import emailjs from '@emailjs/browser';
import { UseFormReset } from 'react-hook-form';

const env = import.meta.env;

interface DataType {
  name: string;
  email: string;
  message: string;
}

interface useSendEmailProps {
  data: DataType;
  // event: any;
}

export const useSendEmail = (reset: UseFormReset<DataType>) => {
  return ({ data }: useSendEmailProps) => {
    // event.preventDefault();

    const templateParams: {
      from_name: string;
      from_email: string;
      message: string;
    } = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    return emailjs
      .send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('Email sent successfully!');
          reset();
        },
        (error) => {
          console.error('Error', error.text);
        }
      );
  };
};
