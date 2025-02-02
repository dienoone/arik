import { Component, inject } from '@angular/core';

import { ButtonTextComponent } from '../../components/shared/button-text/button-text.component';
import { WorkCardComponent } from '../../components/work-card/work-card.component';

import { Icon } from '../../enums/icon.enum';
import { Size } from '../../enums/size.enum';
import { HomeServiceCard } from '../../models/home-service-card.model';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { BadgeComponent } from '../../components/shared/badge/badge.component';
import { HomeServiceCardComponent } from './components/home-service-card/home-service-card.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ScrollAnimationComponent } from './components/scroll-animation/scroll-animation.component';
import { BlurringDirective } from '../../directives/blurring.directive';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-home',
  imports: [
    ButtonTextComponent,
    HomeServiceCardComponent,
    WorkCardComponent,
    AnimateOnScrollDirective,
    BadgeComponent,
    TimeLineComponent,
    TestimonialsComponent,
    ScrollAnimationComponent,
    BlurringDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  Icon = Icon;
  Size = Size;

  private worksService = inject(WorkService);
  workCards = this.worksService.get();

  serviceCards: HomeServiceCard[] = [
    {
      number: '01',
      title: 'Web design',
      description:
        'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
      link: 'About Design',
    },
    {
      number: '02',
      title: 'Development',
      description:
        'Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.',
      link: 'About Development',
    },
    {
      number: '03',
      title: 'Content & Seo',
      description:
        'Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.',
      link: 'About Seo',
    },
  ];
}
