import { Component } from '@angular/core';
import { SocialLink } from '../../models/social-link.interface';
import { Icon } from '../../enums/icon.enum';
import { SocialLinkComponent } from '../../components/shared/social-link/social-link.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [SocialLinkComponent, AnimateOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  socials: SocialLink[] = [
    {
      icon: Icon.Instagram,
      name: 'Instagram',
      url: '',
    },
    {
      icon: Icon.Twitter,
      name: 'Twitter',
      url: '',
    },
    {
      icon: Icon.Facebook,
      name: 'Facebook',
      url: '',
    },
    {
      icon: Icon.Behance,
      name: 'Behance',
      url: '',
    },
    {
      icon: Icon.Dribbble,
      name: 'Dribbble',
      url: '',
    },
    {
      icon: Icon.Pinterest,
      name: 'Pinterest',
      url: '',
    },
  ];
}
