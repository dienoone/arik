import { Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  mobileNavigationVisible = false;
  destroyRef = inject(DestroyRef);

  navLinks = [
    { route: '/services', label: 'Services' },
    { route: '/work', label: 'Work' },
    { route: '/about', label: 'About' },
    { route: '/blog', label: 'Blog' },
    { route: '/pricing', label: 'Pricing' },
  ];

  constructor(private router: Router) {
    const routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileNavigationVisible = false;
      });

    this.destroyRef.onDestroy(() => {
      routerSubscription.unsubscribe();
    });
  }
}
