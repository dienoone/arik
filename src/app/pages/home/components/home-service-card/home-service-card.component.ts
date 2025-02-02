import { Component, input } from '@angular/core';
import { ButtonTextComponent } from '../../../../components/shared/button-text/button-text.component';
import { Icon } from '../../../../enums/icon.enum';
import { Size } from '../../../../enums/size.enum';
import { HomeServiceCard } from '../../../../models/home-service-card.model';

@Component({
  selector: 'app-home-service-card',
  imports: [ButtonTextComponent],
  templateUrl: './home-service-card.component.html',
  styleUrl: './home-service-card.component.css',
})
export class HomeServiceCardComponent {
  Icon = Icon;
  Size = Size;
  card = input.required<HomeServiceCard>();
}
