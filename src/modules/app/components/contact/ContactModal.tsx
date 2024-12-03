import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Modal, SimpleButton } from 'components/index'; // TODO: fix imports alias
import { RefObject } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalProps } from 'src/types';
import * as z from 'zod';
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

interface FormValues {
  name: string;
  email: string;
  user_message: string;
}

interface ContactModalProps extends ModalProps {
  formRef: RefObject<HTMLFormElement> | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  formRef,
  open,
  onClose: closeModal,
  ...restProps
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    trigger,
    clearErrors,
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

  const onClose = () => {
    clearErrors();
    return closeModal();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      classNames={{
        modal:
          'rounded-lg bg-white dark:bg-gray-dark-muted border dark:border-white text-gray-dark-muted dark:text-white text-lg xl:text-xl',
        closeIcon: 'dark:text-white text-gray-dark-muted',
      }}
      styles={{
        modalContainer: {
          borderRadius: '25px',
        },
      }}
      {...restProps}
    >
      <div className="w-[75vw] md:w-[400px] h-full bg-transparent flex flex-col">
        <div className="flex w-full items-center justify-center">
          <h3 className="text-gray-500 dark:text-gray-100">Contact me</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full w-full justify-start pt-3 gap-3"
        >
          <div className="flex flex-col w-full min-h-[400px] pt-2 pb-4 gap-2">
            <Input
              register={register('name', {
                required: true,
                min: 3,
              })}
              label="First name:"
              error={!!Object.keys(errors?.name ?? {}).length}
              fieldError={errors?.name}
              errorMessage={errors?.name?.message}
            />
            <Input
              register={register('email', {
                required: true,
              })}
              label="E-mail address:"
              error={!!Object.keys(errors?.email ?? {}).length}
              fieldError={errors?.email}
              errorMessage={errors?.email?.message}
            />

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
            />
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
    </Modal>
  );
};
