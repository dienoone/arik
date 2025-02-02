import { Component } from '@angular/core';
import { ButtonTextComponent } from '../../components/shared/button-text/button-text.component';
import { Icon } from '../../enums/icon.enum';
import { Size } from '../../enums/size.enum';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { SocialLinkComponent } from '../../components/shared/social-link/social-link.component';
import { SocialLink } from '../../models/social-link.interface';

@Component({
  selector: 'app-about',
  imports: [ButtonTextComponent, AnimateOnScrollDirective, SocialLinkComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  Icon = Icon;
  Size = Size;

  socialLinks: SocialLink[] = [
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

  awards: { award: string; year: string }[] = [
    {
      award: 'Awwwards SOTD',
      year: '2023',
    },
    {
      award: 'CSSDA SOTD',
      year: '2023',
    },
    {
      award: 'Awwwards Website of the Month',
      year: '2023',
    },
    {
      award: 'CSSDA SOTD',
      year: '2022',
    },
    {
      award: 'Awwwards SOTD',
      year: '2022',
    },
    {
      award: 'Awwwards Website of the Year',
      year: '2021',
    },
  ];
}
