import { Component, inject, input, OnInit, signal } from '@angular/core';

import { SocialLinkComponent } from '../../../components/shared/social-link/social-link.component';
import { PostCardComponent } from '../../../components/post-card/post-card.component';
import { ButtonTextComponent } from '../../../components/shared/button-text/button-text.component';

import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll.directive';
import { Icon } from '../../../enums/icon.enum';
import { Size } from '../../../enums/size.enum';

import { Post } from '../../../models/post.interface';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-blog-single',
  imports: [
    PostCardComponent,
    AnimateOnScrollDirective,
    ButtonTextComponent,
    SocialLinkComponent,
  ],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.css',
})
export class BlogSingleComponent implements OnInit {
  Icon = Icon;
  Size = Size;
  private postsService = inject(PostsService);

  id = input.required<string>();
  post = signal<Post | undefined>(undefined);
  posts = this.postsService.get();

  ngOnInit(): void {
    this.post.set(this.postsService.getById(this.id()));
  }
}
