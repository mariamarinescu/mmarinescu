import emailjs from '@emailjs/browser';

const env = import.meta.env;

interface DataType {
  from_email: string;
  message: string;
}

export const useSendEmail = () => {
  return (payload: DataType) =>
    emailjs
      .send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        { ...payload },
        {
          publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('Email sent successfully!');
        },
        (error) => {
          console.error('Error', error.text);
        }
      );
};
