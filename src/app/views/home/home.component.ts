import { Component } from '@angular/core';

import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchComponent
  ]
})
export class HomeComponent {
  searched(value: string) {
    console.log(value);
  }
}
