import { ThemeAwareTooltip } from 'components/ThemeAwareTooltip';
import { PlacesType } from 'react-tooltip';
import { Button, ButtonProps } from './Button';

interface ButtonWithTooltipProps extends ButtonProps {
  dataTooltipContent: string;
  dataTooltipId: string;
  place?: PlacesType;
}

export const ButtonWithTooltip = ({
  dataTooltipContent,
  dataTooltipId,
  place = 'bottom',
  ...rest
}: ButtonWithTooltipProps) => {
  return (
    <>
      <Button
        dataTooltipContent={dataTooltipContent}
        dataTooltipId={dataTooltipId}
        {...rest}
      />
      <ThemeAwareTooltip id={dataTooltipId} place={place} />
    </>
  );
};
