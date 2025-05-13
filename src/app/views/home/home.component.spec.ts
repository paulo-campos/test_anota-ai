import { provideHttpClient } from '@angular/common/http';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { of } from 'rxjs';

import { characterNormalizer } from '@utils/character-normalizer/character-normalizer.utils';
import { mockList } from '@mocks/list.mock';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('.ngOnInit()', () => {
    it('should load the list', async () => {
      spyOn(component['itemService'], 'getList').and.returnValue(of(mockList));

      component.ngOnInit();

      await fixture.whenStable();

      expect(component.loadedList).toEqual(mockList);
    })
  });

  describe('.onSearch()', () => {
    describe('called with empty value', () => {
      it('should not filter list', () => {
        const test = '';

        component.loadedList = mockList;
        component.onSearch(test);
        fixture.detectChanges();

        expect(component.filteredList).toEqual(component.loadedList);
      });
    });

    describe('called with filled value', () => {
      it('should filter list using value', () => {
        const test = 'pizza';

        component.loadedList = mockList;
        component.onSearch(test);
        fixture.detectChanges();

        const filteredList = component.loadedList.filter(({ title, description }) => {
          const titleNormalized = characterNormalizer(title);
          const descriptionNormalized = characterNormalizer(description);
          const valueNormalized = characterNormalizer(test);

          return (
            !test.length ||
            titleNormalized.includes(valueNormalized) ||
            descriptionNormalized.includes(valueNormalized)
          );
        });

        expect(component.filteredList).toEqual(filteredList);
      });
    });
  });

  describe('.onRemove()', () => {
    it('should remove item by selected position', () => {
      const test = Math.round(Math.random() * mockList.length - 1) + 1;

      component.loadedList = mockList;
      component.onRemove(test);
      fixture.detectChanges();

      const filteredList = component.filteredList.splice(test, 1);

      expect(component.filteredList).toEqual(filteredList);
    });
  });
});
