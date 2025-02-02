import { Component, input } from '@angular/core';
import { PricingCard } from '../../../models/pricing-card';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent {
  data = input.required<PricingCard>();
}
