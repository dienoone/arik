import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { CountUpModule } from 'ngx-countup';

import { ButtonTextComponent } from '../../components/shared/button-text/button-text.component';

import { Icon } from '../../enums/icon.enum';
import { Size } from '../../enums/size.enum';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ServiceCard } from '../../models/service-card';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  imports: [
    ButtonTextComponent,
    CountUpModule,
    ServiceCardComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  private servicesService = inject(ServicesService);

  Icon = Icon;
  Size = Size;
  services = this.servicesService.get();
}
