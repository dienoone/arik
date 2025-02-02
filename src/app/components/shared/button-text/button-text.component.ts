import { Component, input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { Badge } from '../../../models/badge.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-text',
  imports: [BadgeComponent, CommonModule, RouterLink],
  templateUrl: './button-text.component.html',
  styleUrl: './button-text.component.css',
})
export class ButtonTextComponent {
  badge = input.required<Badge>();
  text = input.required<string>();
  styles = input<string>();
  url = input<string>('./');
  fragment = input<string>();
}
