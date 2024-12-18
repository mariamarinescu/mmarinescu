import { useEffect, useState } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';

export const ThemeAwareTooltip = ({
  id,
  place = 'bottom',
}: {
  id: string;
  place?: PlacesType;
}) => {
  const [tooltipVariant, setVariant] = useState<'dark' | 'light'>('dark');
  const darkThemeStatus = useRecoilValue(darkThemeAtom);

  useEffect(() => {
    if (!!darkThemeStatus) {
      setVariant('light');
    } else {
      setVariant('dark');
    }
  }, [darkThemeStatus]);

  return (
    <Tooltip
      id={id}
      place={place}
      className="z-50 max-w-sm text-xs"
      variant={tooltipVariant}
      data-testid="tooltip"
    />
  );
};
