export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
}

export type LinkComponentProps = {
  text: string;
  color: ButtonColors;
  href?: string;
  target?: string;
  className?: string;
};
