import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IItem } from '@interfaces/item.interfaces';
import { characterNormalizer } from '@utils/character-normalizer.utils';
import { ItemService } from '@services/item.service';
import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/search/search.component';
import { CloseComponent } from '@components/close/close.component';
import { CardComponent } from '@components/card/card.component';

import { HomeFacade } from './home.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  providers: [
    HomeFacade
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    SearchComponent,
    CloseComponent,
    CardComponent
  ]
})
export class HomeComponent {
  filtered$: Observable<IItem[]>;

  constructor(private itemService: ItemService) {
    this.filtered$ = this.itemService.getList();
  }

  onSearch(value: string) {
    this.filtered$ = this.itemService.getList()
      .pipe(map(response => (
        response.filter(({ title, description }) => {
          const titleNormalized = characterNormalizer(title);
          const descriptionNormalized = characterNormalizer(description);
          const valueNormalized = characterNormalizer(value);

          return (
            !value.length ||
            titleNormalized.includes(valueNormalized) ||
            descriptionNormalized.includes(valueNormalized)
          );
        })
      )));
  }

  onRemove(itemId: number) {
    this.filtered$ = this.filtered$
      .pipe(map(response => (
        response.filter(({ id }) => id !== itemId)
      )));
  }
}
