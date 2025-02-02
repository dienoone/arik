import { Component } from '@angular/core';
import { TestimonialCard } from '../../../../models/testimonial-card';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent, AnimateOnScrollDirective, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: TestimonialCard[] = [
    {
      companyImageUrl: '/images/campanies/campany-3.svg',
      title: "Amazing Results with Arik's Premium Web Design Services.",
      description:
        'Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.',
      personImageUrl: '/images/testimonials/testimonials-1.png',
      name: 'John Smith',
      companyName: 'ABC Company',
    },
    {
      companyImageUrl: '/images/campanies/campany-6.svg',
      title: 'Professional, Collaborative Web Design Experience with Arik.',
      description:
        'I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.',
      personImageUrl: '/images/testimonials/testimonials-4.png',
      name: 'Karen Lee',
      companyName: 'Redwood Technologies',
    },
    {
      companyImageUrl: '/images/campanies/campany-2.svg',
      title: 'Web Design and Content Solutions: Stand Out from the Crowd.',
      description:
        "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
      personImageUrl: '/images/testimonials/testimonials-2.png',
      name: 'Emily Davis',
      companyName: 'Greenway Industries',
    },

    {
      companyImageUrl: '/images/campanies/campany-5.svg',
      title: 'Expert Webflow and SEO Services: Excellent Work, Great Results.',
      description:
        "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
      personImageUrl: '/images/testimonials/testimonials-5.png',
      name: 'David Kim',
      companyName: 'Design Inc.',
    },
    {
      companyImageUrl: '/images/campanies/campany-4.svg',
      title: 'Expertise in Web Design: Second to None with Arik.',
      description:
        "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
      personImageUrl: '/images/testimonials/testimonials-3.png',
      name: 'Andrew Thompson',
      companyName: 'Silverstone Corporation',
    },
    {
      companyImageUrl: '/images/campanies/campany-1.svg',
      title:
        'High-Quality Web Design: Exceptional Attention to Detail with Arik.',
      description:
        "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
      personImageUrl: '/images/testimonials/testimonials-6.png',
      name: 'Ryan Chen',
      companyName: 'Golden Gate Solutions',
    },
  ];
}
