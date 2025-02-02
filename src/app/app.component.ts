import { Component, OnInit } from '@angular/core';

import { LayoutComponent } from './pages/layout.component';

import { Icon } from './enums/icon.enum';
import { Size } from './enums/size.enum';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'Arik';
  Icon = Icon;
  Size = Size;
}
