import { Component, input } from '@angular/core';
import { Icon } from '../../../enums/icon.enum';
import { Size } from '../../../enums/size.enum';
import { BadgeComponent } from '../badge/badge.component';
import { CommonModule } from '@angular/common';
import { Accordion } from '../../../models/accordion';

@Component({
  selector: 'app-accordion',
  imports: [BadgeComponent, CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  Icon = Icon;
  Size = Size;

  accordion = input.required<Accordion>();
  open = false;

  get animations() {
    return this.open
      ? 'transition-all duration-300 border-primary-400 rotate-45'
      : '';
  }

  get styles() {
    return this.open
      ? 'border-primary-400 transition-all duration-300 group-hover:bg-primary-100 group-hover:border-primary-400 '
      : 'group-hover:bg-primary-100';
  }
}
