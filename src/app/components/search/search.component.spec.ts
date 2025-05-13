import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('(onSearch)', () => {
    it('should have been called 1 time after inputed text', () => {
      spyOn(component.onSearch, 'emit');

      const value = 'value test';

      component.search.setValue(value);

      expect(component.onSearch.emit).toHaveBeenCalledTimes(1);
    });

    it('should output inputed text', () => {
      spyOn(component.onSearch, 'emit');

      const value = 'value test';

      component.search.setValue(value);

      expect(component.onSearch.emit).toHaveBeenCalledWith(value);
    });
  });
});
