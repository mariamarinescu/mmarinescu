import { atom } from 'recoil';

const darkThemeAtom = atom<boolean | undefined>({
  key: 'darkTheme',
  default: true,
});

export default darkThemeAtom;
