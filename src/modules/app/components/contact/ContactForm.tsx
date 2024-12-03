import { zodResolver } from '@hookform/resolvers/zod';
import { SimpleButton } from 'components/buttons';
import { Input } from 'components/inputs';
import { RefObject } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSendEmail } from './useSendEmail';

const FormSchema = z.object({
  name: z.string().trim().min(3, 'Name must not be lesser than 3 characters'),
  email: z.string().email('Invalid email. Email must be a valid email address'),
  user_message: z
    .string()
    .trim()
    .min(50, { message: 'Message must be at least 50 characters long.' })
    .max(2300, { message: 'Message must not exceed 2300 characters.' })
    .refine((value) => /^[a-zA-Z0-9\s.,'"\-!?]*$/.test(value), {
      message: 'Message contains invalid characters.',
    }),
});

type FormInputType = z.infer<typeof FormSchema>;

interface FormProps {
  formRef: RefObject<HTMLFormElement> | null;
}

export default function Form({ formRef }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    trigger,
  } = useForm<FormInputType>({
    resolver: zodResolver(FormSchema),
  });
  const sendEmail = useSendEmail();

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    if (!isValid) {
      return trigger();
    }
    const response = sendEmail({ ref: formRef, event: data });

    ({ response });
  };

  return (
    <div className="w-[75vw] md:w-[400px] h-full bg-transparent flex flex-col">
      <div className="flex w-full items-center justify-center">
        <h3 className="text-gray-500 dark:text-gray-100">Contact me</h3>
      </div>

      <form
        // ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full w-full justify-start pt-3 gap-3"
      >
        <div className="flex flex-col w-full min-h-[400px] pt-2 pb-4 gap-2">
          <Input
            {...register('name', {
              required: true,
              min: 3,
            })}
            label="First name:"
            error={errors?.name?.message}
          />
          <Input
            {...register('email', {
              required: true,
            })}
            label="E-mail address:"
            error={errors?.email?.message}
          />
          {/* 
          <Input
            register={register('user_message', {
              required: true,
            })}
            label="Message:"
            error={!!Object.keys(errors?.user_message ?? {}).length}
            fieldError={errors?.user_message}
            errorMessage={errors?.user_message?.message}
            inputClassName="h-full"
            className="h-[140px] mb-4"
          /> */}

          <textarea
            id="user_message"
            name="user_message"
            rows={10}
            maxLength={2300}
            placeholder="Write your message here (up to 2300 characters)..."
            aria-describedby="char-counter"
            required
          ></textarea>
          <span id="char-counter">0/2300 characters used</span>
        </div>

        <div className="flex flex-col h-fit">
          <SimpleButton
            type="submit"
            onClick={(values: any) => {
              return onSubmit(values);
            }}
          >
            <p
              className="text-base"
              // className={clsx(
              //   !isValid ? 'text-black hover:text-white' : 'text-white'
              // )}
            >
              Submit
            </p>
          </SimpleButton>
        </div>
      </form>
    </div>
  );
}
