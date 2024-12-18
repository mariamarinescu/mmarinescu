import { atom } from 'recoil';

const darkThemeAtom = atom<boolean | undefined>({
  key: 'darkTheme',
  default: false,
});

export default darkThemeAtom;
