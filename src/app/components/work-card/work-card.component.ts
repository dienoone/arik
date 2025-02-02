import { Component, input } from '@angular/core';
import { BadgeComponent } from '../shared/badge/badge.component';
import { Icon } from '../../enums/icon.enum';
import { Size } from '../../enums/size.enum';
import { WorkCard } from '../../models/work-card.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-card',
  imports: [BadgeComponent, RouterLink],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css',
})
export class WorkCardComponent {
  Icon = Icon;
  Size = Size;

  workCard = input.required<WorkCard>();
}
