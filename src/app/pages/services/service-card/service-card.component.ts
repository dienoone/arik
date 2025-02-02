import { Component, input } from '@angular/core';
import { ServiceCard } from '../../../models/service-card';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  serviceData = input.required<ServiceCard>();
}
