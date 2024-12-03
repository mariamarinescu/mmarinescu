import { zodResolver } from '@hookform/resolvers/zod';
import { SimpleButton } from 'components/buttons';
import { TextArea } from 'components/inputs';
import { Input } from 'components/inputs/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSendEmail } from './useSendEmail';

const FormSchema = z.object({
  name: z.string().trim().min(3, 'Name must not be lesser than 3 characters'),
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

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

type FormInputType = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    trigger,
    reset,
  } = useForm<FormInputType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });
  const sendEmail = useSendEmail(reset);

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    if (!isValid) {
      return trigger();
    }
    const response = sendEmail({ data });

    ({ response });
  };

  return (
    <div className="w-[75vw] md:w-[400px] h-full bg-transparent flex flex-col">
      <div className="flex w-full items-center justify-center">
        <h3 className="text-gray-500 dark:text-gray-100">Contact me</h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full w-full justify-start pt-3 gap-3"
      >
        <div className="flex flex-col w-full min-h-[400px] pt-2 pb-4 gap-2">
          <Input
            {...register('name', {
              required: true,
              min: 3,
            })}
            label="First name"
            error={errors?.name?.message}
            required
          />
          <Input
            {...register('email')}
            label="E-mail address"
            error={errors?.email?.message}
            required
          />
          <TextArea
            {...register('message')}
            rows={10}
            maxLength={2300}
            aria-describedby="char-counter"
            label="Message"
            error={errors?.message?.message}
            required
          />
        </div>

        <div className="flex flex-col h-fit">
          <SimpleButton
            type="submit"
            onClick={(values: any) => {
              return onSubmit(values);
            }}
          >
            <p className="text-base">Submit</p>
          </SimpleButton>
        </div>
      </form>
    </div>
  );
}
