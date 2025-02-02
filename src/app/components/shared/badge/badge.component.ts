import { Component, computed, input } from '@angular/core';
import { Size } from '../../../enums/size.enum';
import { CommonModule } from '@angular/common';
import { Badge } from '../../../models/badge.interface';
import { Icon } from '../../../enums/icon.enum';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',

  host: {
    class: 'group',
  },
})
export class BadgeComponent {
  badge = input.required<Badge>();
  styles = input<string>('');
  Icon = Icon;

  validatedBadge = computed(() => {
    const badge = this.badge();

    return {
      size: badge.size ?? Size.DEFAULT,
      name: badge.name,
      animation: badge.animation ?? '',
    };
  });

  get iconSizeClass() {
    return {
      icon: this.validatedBadge().size === Size.DEFAULT,
      'icon-lg': this.validatedBadge().size === Size.LARGE,
      'icon-sm': this.validatedBadge().size === Size.SMALL,
    };
  }

  get svgSizeClass() {
    return {
      svg: this.validatedBadge().size === Size.DEFAULT,
      'svg-lg': this.validatedBadge().size === Size.LARGE,
      'svg-sm': this.validatedBadge().size === Size.SMALL,
    };
  }

  get imgPath() {
    return `/assets/icons/${this.validatedBadge().name}.svg`;
  }

  isIcon(value: any): boolean {
    return Object.values(Icon).includes(value);
  }
}
