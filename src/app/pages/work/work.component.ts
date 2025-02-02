import { Component, inject } from '@angular/core';

import { WorkCardComponent } from '../../components/work-card/work-card.component';

import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { Icon } from '../../enums/icon.enum';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-work',
  imports: [WorkCardComponent, AnimateOnScrollDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  private workService = inject(WorkService);
  Icon = Icon;
  workCards = this.workService.get();
}
