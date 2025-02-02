import { Component } from '@angular/core';
import { ButtonTextComponent } from '../shared/button-text/button-text.component';
import { Icon } from '../../enums/icon.enum';
import { Size } from '../../enums/size.enum';
import { RouteConfigLoadEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [ButtonTextComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  Icon = Icon;
  Size = Size;
}
