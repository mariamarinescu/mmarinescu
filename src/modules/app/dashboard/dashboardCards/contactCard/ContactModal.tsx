import { Modal } from 'components/index'; // TODO: fix imports aliases
import { FormProvider, useForm } from 'react-hook-form';
import { ModalProps } from 'src/types';
import ContactForm from './ContactForm';

interface ContactModalProps extends ModalProps {}

export const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onClose: closeModal,
  ...restProps
}) => {
  const methods = useForm();

  const onClose = () => {
    methods.clearErrors();
    closeModal?.();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      classNames={{
        modal:
          'mx-auto min-w-44 w-full sm:w-96 rounded-lg bg-white dark:bg-gray-dark-muted custom-border text-gray-dark-muted dark:text-white text-lg xl:text-xl',
        closeIcon: 'dark:text-white text-gray-dark-muted custom-border',
        modalContainer: 'rounded-3xl p-4',
      }}
      data-testid="contact-modal"
      {...restProps}
    >
      <FormProvider {...methods}>
        <ContactForm onClose={onClose} />
      </FormProvider>
    </Modal>
  );
};
