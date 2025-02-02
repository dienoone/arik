import { Icon } from '../enums/icon.enum';
import { Size } from '../enums/size.enum';

export interface Badge {
  size?: Size;
  name: Icon | string;
  animation?: string;
}
