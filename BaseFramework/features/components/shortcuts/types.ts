import {Theme} from '@app/common/theme/types/theme';
export enum shortcutsVariants {
  primary = 'primary',
  secondary = 'secondary',
}

export interface ShortcutsItem {
  id: string;
  variant?: shortcutsVariants;
  labelValue?: string;
  Icon: React.JSX.Element;
  inverted?: boolean;
  onPress?: () => void;
  numberOfLines?: number;
}

export interface ShortcutsProperties {
  shortcuts: ShortcutsItem[];
  inverted?: boolean;
}
export interface ShortcutsStyleProperties {
  theme: Theme;
  inverted: boolean;
}
export interface SvgColorProps {
  iconcolor: string;
}
