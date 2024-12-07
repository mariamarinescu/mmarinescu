import { IconWithDarkThemeType } from 'components/interfaces';

export const EmailIcon: React.FC<IconWithDarkThemeType> = ({
  className,
  isDarkThemeActive,
}) => (
  <svg
    fill={isDarkThemeActive ? '#FFFFFF' : '#000000'}
    version="1.1"
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    className={className}
  >
    <g>
      <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z" />
      <path
        d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h1v3c0,0.4,0.2,0.7,0.5,0.9
		C8.7,32,8.8,32,9,32c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.1-3.8,12.7-3.8H25c2.8,0,5-2.2,5-5V9.9L16.6,18.8z"
      />
    </g>
  </svg>
);
