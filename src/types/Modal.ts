import { ModalProps as ResponsiveModalProps } from 'react-responsive-modal';

export interface ModalProps extends ResponsiveModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}
