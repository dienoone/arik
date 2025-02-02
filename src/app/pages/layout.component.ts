import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { CtaComponent } from '../components/cta/cta.component';
import { RouterOutlet } from '@angular/router';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [
    FooterComponent,
    CtaComponent,
    RouterOutlet,
    AnimateOnScrollDirective,
    HeaderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
