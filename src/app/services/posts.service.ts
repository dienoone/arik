import { Injectable, signal } from '@angular/core';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts = signal<Post[]>([
    {
      id: '1',
      imageUrl: '/images/posts/post-1.png',
      date: '23rd Aug 2023',
      title: 'How to Build a Stunning Website with Framer',
      description:
        'Learn how to create an impressive website using Framer with our step-by-step guide.',
      tag: 'WebDesign',
    },
    {
      id: '2',
      imageUrl: '/images/posts/post-2.png',
      date: '23rd Aug 2023',
      title: '10 website elements for maximum user engagement',
      description:
        '10 website elements to engage users, from intuitive navigation to compelling visuals.',
      tag: 'WebDesign',
    },
    {
      id: '3',
      imageUrl: '/images/posts/post-3.png',
      date: '23rd Aug 2023',
      title: 'The importance of content in driving website traffic',
      description:
        'Quality content is king. Learn how to create valuable, SEO-optimized content.',
      tag: 'WebDesign',
    },
    {
      id: '4',
      imageUrl: '/images/posts/post-4.png',
      date: '23rd Aug 2023',
      title: '10 common web development mistakes to avoid',
      description:
        "10 common web development mistakes and improve your site's functionality and user experience.",
      tag: 'WebDesign',
    },
    {
      id: '5',
      imageUrl: '/images/posts/post-5.png',
      date: '23rd Aug 2023',
      title: 'Why responsive web design is critical for your business',
      description:
        'Responsive web design ensures your site looks great and performs well on all devices.',
      tag: 'WebDesign',
    },
    {
      id: '6',
      imageUrl: '/images/posts/post-6.png',
      date: '23rd Aug 2023',
      title:
        'The art of SEO writing: How to write content that ranks on Google',
      description:
        'Optimize your website with expert tips on writing content that ranks high on Google.',
      tag: 'WebDesign',
    },
  ]);

  get() {
    return this.posts.asReadonly();
  }

  getById(id: string) {
    return this.posts().find((post) => post.id === id);
  }
}
