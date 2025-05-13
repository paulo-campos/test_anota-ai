import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';

import { IItem } from '@interfaces/item.interfaces';
import { characterNormalizer } from '@utils/character-normalizer/character-normalizer.utils';
import { ItemService } from '@services/item.service';
import { HeaderComponent } from '@components/header/header.component';
import { SearchComponent } from '@components/search/search.component';
import { CloseComponent } from '@components/close/close.component';
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
    CloseComponent,
    CardComponent
  ]
})
export class HomeComponent implements OnInit {
  loadedList: IItem[] = [];
  filteredList: IItem[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getList()
      .subscribe(response => {
        this.loadedList = response;
        this.filteredList = response;
      });
  }

  onSearch(value: string) {
    this.filteredList = this.loadedList.filter(({ title, description }) => {
      const titleNormalized = characterNormalizer(title);
      const descriptionNormalized = characterNormalizer(description);
      const valueNormalized = characterNormalizer(value);

      return (
        !value.length ||
        titleNormalized.includes(valueNormalized) ||
        descriptionNormalized.includes(valueNormalized)
      );
    });
  }

  onRemove(i: number) {
    this.filteredList.splice(i, 1);
  }
}
