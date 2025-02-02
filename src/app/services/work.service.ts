import { Injectable, signal } from '@angular/core';
import { WorkCard } from '../models/work-card.model';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  private works = signal<WorkCard[]>([
    {
      id: '1',
      imageUrl: '/images/selected-work/selected-work-1.png',
      title: 'Space',
      subTitle: 'Web Design',
    },
    {
      id: '2',
      imageUrl: '/images/selected-work/selected-work-2.png',
      title: 'Nova',
      subTitle: 'Web Design',
    },
    {
      id: '3',
      imageUrl: '/images/selected-work/selected-work-3.png',
      title: 'Sonic',
      subTitle: 'Web Design',
    },
    {
      id: '4',
      imageUrl: '/images/selected-work/selected-work-4.png',
      title: 'Solar',
      subTitle: 'Web Design',
    },
  ]);

  get() {
    return this.works.asReadonly();
  }

  getById(id: string) {
    return this.works().find((work) => work.id === id);
  }
}
