export enum IconLinksEnum {
  user = 'assets/icons/user.svg',
  settings = 'assets/icons/settings.svg',
  logout = 'assets/icons/exit.svg',
  loupe = 'assets/icons/loupe.svg',
  pen = 'assets/icons/pen.svg',
  cross = 'assets/icons/cross.svg',
}

export type IconName = keyof typeof IconLinksEnum;