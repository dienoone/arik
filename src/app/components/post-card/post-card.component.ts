import { Component, input } from '@angular/core';
import { Post } from '../../models/post.interface';
import { Icon } from '../../enums/icon.enum';
import { BadgeComponent } from '../shared/badge/badge.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [BadgeComponent, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  post = input.required<Post>();

  Icon = Icon;
}
