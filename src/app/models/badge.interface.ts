import { Icon } from '../enums/icon.enum';
import { Size } from '../enums/size.enum';

export interface Badge {
  iconSize?: Size;
  svgSize?: Size;
  name: Icon | string;
  animation?: string;
}
