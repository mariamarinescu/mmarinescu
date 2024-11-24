import 'react-responsive-modal/styles.css';

import { Modal as ResponsiveModal } from 'react-responsive-modal';

interface ModalProps {
  modalOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  modalOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <ResponsiveModal open={modalOpen} onClose={onClose}>
      <div className="w-[400px] h-[400px] bg-white">
        <h2>{title}</h2>
        {children}
      </div>
    </ResponsiveModal>
  );
};
