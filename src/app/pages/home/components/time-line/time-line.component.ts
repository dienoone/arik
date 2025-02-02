import { Component } from '@angular/core';
import { BadgeComponent } from '../../../../components/shared/badge/badge.component';
import { Icon } from '../../../../enums/icon.enum';
import { Size } from '../../../../enums/size.enum';
import { TimeLineCard } from '../../../../models/time-line-card.interface';
import { CommonModule } from '@angular/common';
import { TimeLineCardComponent } from './time-line-card/time-line-card.component';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-time-line',
  imports: [
    BadgeComponent,
    CommonModule,
    TimeLineCardComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css',
})
export class TimeLineComponent {
  Icon = Icon;
  Size = Size;

  cards: TimeLineCard[] = [
    {
      duration: '2 Hours',
      subTitle: 'Do we Match?',
      title: 'Discovery Call',
      descrption:
        'Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?',
      steps: [
        'We get to know each other better',
        'Determine how I can best assist you',
        'Understand the goals you have for your website',
      ],
    },
    {
      duration: '1 Week',
      subTitle: 'lorem ipsum',
      title: 'Concept & STrategy',
      descrption:
        'Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.',
      steps: ['UX Design', 'Wireframes', 'Interactive Prototype'],
    },
    {
      duration: '1 Week',
      subTitle: 'Some Magic',
      title: 'web Design',
      descrption:
        'Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.',
      steps: [
        'High-end web design tailored to your brand',
        'Interactive prototype of the design',
      ],
    },
    {
      duration: '2 Weeks',
      subTitle: 'More Magic',
      title: 'Development',
      descrption:
        'In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.',
      steps: [
        'Custom framer website',
        'Modular web design systems',
        'CMS integration',
      ],
    },
    {
      duration: '2 Hours',
      subTitle: 'Ready To Go',
      title: 'Website Onboarding',
      descrption:
        "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
      steps: [
        'Personal workshop',
        'Personalized video tutorials',
        'Edit text and images directly on your website',
      ],
    },
  ];
}
