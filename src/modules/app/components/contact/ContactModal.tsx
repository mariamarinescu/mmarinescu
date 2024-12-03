import { SimpleButton } from 'components/buttons';
import { Input, Modal } from 'components/index';
import { useSendEmail } from 'modules/app/hooks';
import { RefObject } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalProps } from 'src/types';

interface FormValues {
  firstName: string;
  lastName: string;
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
  } = useForm<FormValues>();

  const sendEmail = useSendEmail();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!isValid) {
      return trigger();
    }
    const response = sendEmail({ ref: formRef, event: data });

    console.log({ response });
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
              register={register('firstName', {
                required: true,
                min: 3,
              })}
              label="First name:"
              error={!!Object.keys(errors?.firstName ?? {}).length}
              fieldError={errors?.firstName}
              errorMessage={
                errors?.firstName?.type === 'required'
                  ? 'First name is required.'
                  : ''
              }
            />

            <Input
              register={register('lastName', {
                required: true,
                min: 3,
              })}
              label="Last name:"
              error={!!Object.keys(errors?.lastName ?? {}).length}
              fieldError={errors?.lastName}
              errorMessage={
                errors?.lastName?.type === 'required'
                  ? 'Last name is required.'
                  : ''
              }
            />
            <Input
              register={register('email', {
                required: true,
              })}
              label="E-mail address:"
              error={!!Object.keys(errors?.email ?? {}).length}
              fieldError={errors?.email}
              errorMessage={
                errors?.email?.type === 'required'
                  ? 'E-mail is required.'
                  : 'Seems that e-mail is incorrect. Please try again!'
              }
            />

            <Input
              register={register('user_message', {
                required: true,
              })}
              label="Message:"
              error={!!Object.keys(errors?.user_message ?? {}).length}
              fieldError={errors?.user_message}
              errorMessage={
                errors?.user_message?.type === 'required'
                  ? 'Message cannot be empty!'
                  : ''
              }
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
