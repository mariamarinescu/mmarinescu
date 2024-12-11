import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/buttons';
import { Input, TextArea } from 'components/inputs';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSendEmail } from './useSendEmail';

const FormSchema = z.object({
  // name: z.string(),
  email: z.string().email('Invalid email. Email must be a valid email address'),
  message: z
    .string()
    .trim()
    .min(50, { message: 'Message must be at least 50 characters long.' })
    .max(2300, { message: 'Message must not exceed 2300 characters.' })
    .refine((value) => /^[a-zA-Z0-9\s.,'"\-!?]*$/.test(value), {
      message: 'Message contains invalid characters.',
    }),
});

const defaultFormValues = {
  // name: undefined,
  email: undefined,
  message: undefined,
};

type FormInputType = z.infer<typeof FormSchema>;

export default function ContactForm({ onClose }: { onClose?: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    trigger,
    reset,
  } = useForm<FormInputType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFormValues,
    mode: 'onSubmit',
  });
  const sendEmail = useSendEmail();

  const onSubmit: SubmitHandler<any> = useCallback(async (data) => {
    console.log({ data: data.target });
    if (!isValid && !data.email.length) {
      trigger();
      return;
    } else {
      try {
        const response = await sendEmail({
          // from_name: data.name,
          from_email: data.email,
          message: data.message,
        });
        console.log({ response });
        reset();
        onClose?.();
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col justify-start bg-transparent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex h-full w-full flex-col gap-3">
          <div className="flex w-full flex-col gap-3">
            {/* <Input
              {...register('name')}
              label="Name"
              error={errors?.name?.message}
              required
            /> */}
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
              type="submit"
              onClick={(values: any) => {
                return onSubmit(values);
              }}
              disabled={!isValid}
              className="w-full"
              label="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
