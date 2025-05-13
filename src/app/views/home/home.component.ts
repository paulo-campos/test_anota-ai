import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';

import { tap } from 'rxjs/operators';

import { IItem } from '@interfaces/item.interfaces';
import { characterNormalizer } from '@utils/character-normalizer.utils';
import { ItemService } from '@services/item.service';
import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/search/search.component';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SearchComponent,
    CardComponent
  ]
})
export class HomeComponent implements OnInit {
  loadedList: IItem[] = [];
  filteredList: IItem[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getList()
      .pipe(tap(response => this.loadedList = response))
      .subscribe(() => this.onSearch(''));
  }

  onSearch(value: string) {
    this.filteredList = this.loadedList.filter(({ title }) => {
      const titleNormalized = characterNormalizer(title);
      const valueNormalized = characterNormalizer(value);

      return !value.length || titleNormalized.includes(valueNormalized);
    });
  }
}
