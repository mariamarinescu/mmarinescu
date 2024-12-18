import { atom } from 'recoil';

const darkThemeAtom = atom<boolean>({
  key: 'darkTheme',
  default: true,
});

export default darkThemeAtom;
