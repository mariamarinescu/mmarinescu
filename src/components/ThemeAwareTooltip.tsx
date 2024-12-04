import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';

export const ThemeAwareTooltip = ({ id }: { id: string }) => {
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
      place="bottom"
      className="max-w-sm text-xs"
      variant={tooltipVariant}
    />
  );
};
