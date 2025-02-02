import { Component, inject } from '@angular/core';
import { Icon } from '../../enums/icon.enum';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-blog',
  imports: [PostCardComponent, AnimateOnScrollDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  Icon = Icon;
  private postsService = inject(PostsService);
  posts = this.postsService.get();
}
