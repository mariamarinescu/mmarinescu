import 'react-responsive-modal/styles.css';

import { Modal as ResponsiveModal } from 'react-responsive-modal';
import { ModalProps } from 'src/types';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
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
    >
      <div className="w-[75vw] md:w-[400px] h-full bg-transparent">
        <h2>{title}</h2>
        {children}
      </div>
    </ResponsiveModal>
  );
};
