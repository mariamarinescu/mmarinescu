import clsx from 'clsx';
import { Modal } from 'components/Modal';
import { Input, SimpleButton } from 'components/index';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GrContact } from 'react-icons/gr';
import { DarkModeButton, LinkedInShareButton } from '.';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  user_message: string;
}

interface TopBarProps {
  isMobile?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isMobile }: TopBarProps) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log({ 'myData:': data, errors });

  const onClose = () => setContactModalOpen(false);

  console.log({ errors });
  return (
    <>
      <LinkedInShareButton size={40} />
      <button onClick={() => setContactModalOpen(true)}>
        <div className="w-10 h-10 flex rounded-full bg-black justify-center items-center">
          <GrContact size={16} color="white" />
        </div>
      </button>
      <DarkModeButton isMobile={isMobile} />
      <Modal modalOpen={contactModalOpen} onClose={onClose} title="Contact me">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full w-full justify-start pt-3 gap-3"
        >
          <div className="flex flex-col w-full h-fit pt-2 gap-2">
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
            />
          </div>

          <SimpleButton
            // disabled={!isValid}
            type="submit"
            onClick={(values: any) => {
              console.log({ submitVal: values });
              return onSubmit(values);
            }}
          >
            <p
              className={clsx(
                !isValid ? 'text-gray-600 border-gray-800' : 'text-white'
              )}
            >
              Submit
            </p>
          </SimpleButton>
        </form>
      </Modal>
    </>
  );
};
