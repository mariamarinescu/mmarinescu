import { LinkedinIcon, LinkedinShareButton } from 'react-share';

interface LinkedInShareButtonProps {
  className?: string;
  size?: number;
  isMobile?: boolean;
}

export const LinkedInShareButton: React.FC<LinkedInShareButtonProps> = ({
  className,
  size,
}: LinkedInShareButtonProps) => {
  return (
    <LinkedinShareButton
      url={'https://www.linkedin.com/in/maria-marinescu/'}
      className={className}
    >
      <LinkedinIcon size={size} round />
    </LinkedinShareButton>
  );
};
