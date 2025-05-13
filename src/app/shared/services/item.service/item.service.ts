import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API } from '@constants/api.constants';
import { IItem } from '@interfaces/item.interfaces';

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(API.LIST);
  }
}
