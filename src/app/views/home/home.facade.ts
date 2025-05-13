import { Injectable } from '@angular/core';

import {
  Observable,
  of
} from 'rxjs';
import { tap } from 'rxjs/operators';

import { IItem } from '@interfaces/item.interfaces';
import { ItemService } from '@services/item.service';

@Injectable()
export class HomeFacade {
  private _list: null | IItem[] = null;

  constructor(private itemService: ItemService) {}

  getList(): Observable<IItem[]> {
    if (this._list) {
      return of(this._list);
    }

    return this.itemService.getList()
      .pipe(tap(response => this._list = response));
  }
}
