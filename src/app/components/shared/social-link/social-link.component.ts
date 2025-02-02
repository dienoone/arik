import { Component, input } from '@angular/core';
import { SocialLink } from '../../../models/social-link.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-link',
  imports: [RouterLink],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css',
})
export class SocialLinkComponent {
  social = input.required<SocialLink>();

  get imgPath() {
    return `/assets/icons/${this.social().icon}.svg`;
  }
}
