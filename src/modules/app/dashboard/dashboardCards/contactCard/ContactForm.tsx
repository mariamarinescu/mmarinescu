import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/buttons';
import { Input, TextArea } from 'components/inputs';
import { useCallback, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import { z } from 'zod';
import { useSendEmail } from './useSendEmail';

const FormSchema = z.object({
  email: z.string().email('Invalid email. Email must be a valid email address'),
  message: z
    .string()
    .trim()
    .min(25, { message: 'Message must be at least 25 characters long.' })
    .max(2300, { message: 'Message must not exceed 2300 characters.' })
    .refine((value) => /^[a-zA-Z0-9\s.,'"\-!?]*$/.test(value), {
      message: 'Message contains invalid characters.',
    }),
});

const defaultFormValues = {
  email: undefined,
  message: undefined,
};

type FormInputType = z.infer<typeof FormSchema>;

export default function ContactForm({ onClose }: { onClose?: () => void }) {
  const [isAPIError, setAPIError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    trigger,
    reset,
  } = useForm<FormInputType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFormValues,
    mode: 'onSubmit',
  });

  const sendEmail = useSendEmail();

  const onValid: SubmitHandler<FormInputType> = useCallback(
    async (data) => {
      ReactGA.event({
        category: 'User',
        action: 'Submitted form',
      });

      try {
        const response = await sendEmail({
          from_email: data.email,
          message: data.message,
        });
        toast.success('Email sent successfully');
        onClose?.();
        reset();
        ReactGA.event({
          category: 'User',
          action: 'Submitted form successfully',
        });
        return response;
      } catch (error) {
        ReactGA.event({
          category: 'User',
          action: 'Submitted form with error',
        });
        console.error('Error sending email:', error);
        setAPIError(true);
      }
    },
    [onClose, reset, sendEmail]
  );

  const onInvalid: SubmitErrorHandler<FormInputType> = useCallback(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    if (isAPIError) {
      setAPIError(false);
      toast.error(
        'An error occurred while trying to send the email! Please try again.'
      );
    }
  }, [isAPIError]);

  return (
    <div
      className="flex h-full w-full flex-col justify-start bg-transparent p-2"
      data-testid="contact-form"
    >
      <h6>Just send me a message...</h6>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className="flex h-full w-full flex-col gap-3 pt-7">
          <div className="flex w-full flex-col gap-3">
            <Input
              {...register('email')}
              label="E-mail address"
              error={errors?.email?.message}
              required
            />
            <TextArea
              {...register('message')}
              rows={3}
              maxLength={2300}
              aria-describedby="char-counter"
              label="Message"
              error={errors?.message?.message}
              required
            />
          </div>
          <div className="mt-3 flex h-fit w-full flex-col">
            <Button
              id="submit-button"
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full"
              isLoading={isSubmitting}
              label="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
