import { Component, input } from '@angular/core';
import { TestimonialCard } from '../../../../../models/testimonial-card';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css',
})
export class TestimonialCardComponent {
  testimonial = input.required<TestimonialCard>();
}
