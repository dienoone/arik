import { Component, inject, input, OnInit, signal } from '@angular/core';

import { ButtonTextComponent } from '../../../components/shared/button-text/button-text.component';

import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { Icon } from '../../../enums/icon.enum';
import { Size } from '../../../enums/size.enum';
import { WorkService } from '../../../services/work.service';
import { WorkCard } from '../../../models/work-card.model';

@Component({
  selector: 'app-work-single',
  imports: [ButtonTextComponent, AnimateOnScrollDirective],
  templateUrl: './work-single.component.html',
  styleUrl: './work-single.component.css',
})
export class WorkSingeComponent implements OnInit {
  private workService = inject(WorkService);
  id = input.required<string>();
  workCard = signal<WorkCard | undefined>(undefined);
  Icon = Icon;
  Size = Size;

  ngOnInit(): void {
    this.workCard.set(this.workService.getById(this.id()));
  }
}
