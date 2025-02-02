import { Component, input } from '@angular/core';

import { TimeLineCard } from '../../../../../models/time-line-card.interface';

@Component({
  selector: 'app-time-line-card',
  imports: [],
  templateUrl: './time-line-card.component.html',
  styleUrl: './time-line-card.component.css',
})
export class TimeLineCardComponent {
  data = input.required<TimeLineCard>();
}
