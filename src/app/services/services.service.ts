import { Injectable, signal } from '@angular/core';
import { ServiceCard } from '../models/service-card';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private servcies = signal<ServiceCard[]>([
    {
      id: '1',
      subtitle: 'Web design',
      title: 'Transforming Your Ideas into Reality',
      imageUrl: '/images/services/services-1.png',
      items: [
        {
          title: 'Concept',
          description:
            "I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.",
        },
        {
          title: 'UX / Ui Design',
          description:
            "I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
        },
        {
          title: 'Prototype',
          description:
            "With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.",
        },
      ],
    },
    {
      id: '2',
      subtitle: 'Development',
      title: 'Developing High-Performance Websites and Web Applications',
      imageUrl: '/images/services/services-2.png',
      items: [
        {
          title: 'Framer',
          description:
            'I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.',
        },
        {
          title: 'CMS Integration',
          description:
            'I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.',
        },
        {
          title: 'Web Design System',
          description:
            'I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.',
        },
      ],
    },
    {
      id: '3',
      subtitle: 'SEO & content',
      title: "Boosting Your Website's Organic Search Traffic",
      imageUrl: '/images/services/services-3.png',
      items: [
        {
          title: 'Research',
          description:
            "I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking.",
        },
        {
          title: 'Seo Ranking',
          description:
            "My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.",
        },
        {
          title: 'SEO Support',
          description:
            'With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.',
        },
      ],
    },
  ]);

  get() {
    return this.servcies.asReadonly();
  }

  getById(id: string) {
    return this.servcies().find((servic) => servic.id === id);
  }
}
