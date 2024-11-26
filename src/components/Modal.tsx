import 'react-responsive-modal/styles.css';

import { RiCloseLargeLine } from 'react-icons/ri';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { ModalProps } from 'src/types';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  classNames,
  styles,
  children,
}) => {
  return (
    <ResponsiveModal
      open={open}
      onClose={onClose}
      classNames={classNames}
      styles={styles}
      closeIcon={
        <RiCloseLargeLine size={22} className="text-black dark:text-white" />
      }
    >
      {children}
    </ResponsiveModal>
  );
};
