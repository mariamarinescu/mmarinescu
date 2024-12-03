import { Modal } from 'components/index'; // TODO: fix imports alias
import { RefObject } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ModalProps } from 'src/types';
import ContactForm from './ContactForm';

interface ContactModalProps extends ModalProps {
  formRef: RefObject<HTMLFormElement> | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  formRef,
  open,
  onClose: closeModal,
  ...restProps
}) => {
  const methods = useForm();

  const onClose = () => {
    methods.clearErrors();
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
      <FormProvider {...methods}>
        <ContactForm formRef={formRef} />
      </FormProvider>
    </Modal>
  );
};
