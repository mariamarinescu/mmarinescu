import emailjs from '@emailjs/browser';

const env = import.meta.env;

interface sendEmailProps {
  ref: any;
  event: any;
}

export const useSendEmail = () => {
  return ({ ref, event }: sendEmailProps) => {
    console.log('inside of the HOOK', { ref, event });
    event.preventDefault();

    return emailjs
      .sendForm(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        ref.current(),
        {
          publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('Success');
        },
        (error) => {
          console.log('Failed...', error.text);
        }
      );
  };
};
