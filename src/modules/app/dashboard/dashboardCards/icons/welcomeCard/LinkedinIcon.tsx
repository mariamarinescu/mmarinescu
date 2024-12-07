import { IconWithDarkThemeType } from 'components/interfaces';

export const LinkedinIcon: React.FC<IconWithDarkThemeType> = ({
  className,
  isDarkThemeActive,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 16V11M12 16V14M12 11V14M16 16V14C16 12.5 15.5 11 14 11C12.5 11 12 12.5 12 14M7.99 8H8M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
      stroke={isDarkThemeActive ? '#FFFFFF' : '#000000'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
