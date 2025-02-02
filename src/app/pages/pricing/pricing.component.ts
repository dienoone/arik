import { Component } from '@angular/core';

import { PricingCard } from '../../models/pricing-card';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { AccordionComponent } from '../../components/shared/accordion/accordion.component';

import { Icon } from '../../enums/icon.enum';
import { Size } from '../../enums/size.enum';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { Accordion } from '../../models/accordion';

@Component({
  selector: 'app-pricing',
  imports: [AnimateOnScrollDirective, PricingCardComponent, AccordionComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  Icon = Icon;
  Size = Size;

  cards: PricingCard[] = [
    {
      type: 'Lite',
      price: '$3900.00',
      description:
        'Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups.',
      features: ['Concept', 'Strategy', 'Web design', 'Prototype'],
    },
    {
      tag: 'Popular',
      type: 'Premium',
      price: '$6900.00',
      description:
        'Comprehensive web design package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses.',
      features: ['Concept', 'Strategy', 'Web design', 'Development'],
    },
    {
      type: 'Gold',
      price: '$9900.00',
      description:
        'Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market.',
      features: ['Concept', 'Strategy', 'Web design', 'SEO'],
    },
  ];

  faqs: Accordion[] = [
    {
      title: 'What is the typical turnaround time for a website project?',
      data: 'The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.',
    },
    {
      title:
        'Can you help with website maintenance and updates after the project is completed?',
      data: 'The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.',
    },
    {
      title:
        'How do you ensure that my website will be optimized for search engines?',
      data: 'The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.',
    },
    {
      title: 'What is your process for website design and development?',
      data: 'The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.',
    },
  ];
}
