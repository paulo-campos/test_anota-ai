import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { API } from '@constants/api.constants';
import { IItem } from '@interfaces/item.interfaces';
import { mockList } from '@mocks/list.mock';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let httpTestingController: HttpTestingController;
  let service: ItemService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ItemService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemService);
  });

  afterEach(() => httpTestingController.verify());

  describe('.getList()', () => {
    it('should use GET request list to retrieve items', () => {
      service.getList().subscribe();

      const testRequest = httpTestingController.expectOne(API.LIST);

      expect(testRequest.request.method).toEqual('GET');
    });

    it('should return expected data of items', (done: DoneFn) => {
      service.getList().subscribe((response: IItem[]) => {
        expect(response).toEqual(mockList);
        done();
      });

      const testRequest = httpTestingController.expectOne(API.LIST);

      testRequest.flush(mockList);
    });
  });
});
