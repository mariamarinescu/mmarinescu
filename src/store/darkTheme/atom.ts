import { atom } from 'recoil';

const darkThemeAtom = atom<boolean | undefined>({
  key: 'darkTheme',
  default: undefined,
});

export default darkThemeAtom;
