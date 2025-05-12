import { Component } from '@angular/core';

import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    HeaderComponent
  ]
})
export class HomeComponent {

}
