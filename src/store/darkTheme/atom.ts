import { atom } from 'recoil';

const darkThemeAtom = atom<boolean>({
  key: 'darkTheme',
  default: false,
});

export default darkThemeAtom;
