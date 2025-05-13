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
export class HomeComponent implements OnInit {
  dataSource: IItem[] = [];
  filtered: IItem[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getList()
      .pipe(tap(response => this.dataSource = response))
      .subscribe(() => this.onSearch(''));
  }

  onSearch(value: string) {
    this.filtered = this.dataSource.filter(({ title }) => {
      const titleNormalized = characterNormalizer(title);
      const valueNormalized = characterNormalizer(value);

      return !value.length || titleNormalized.includes(valueNormalized);
    });

    console.log(this.filtered);
  }
}
