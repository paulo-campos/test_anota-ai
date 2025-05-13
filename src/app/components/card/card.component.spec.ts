import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('start', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('[imgSrc]', () => {
    it('should show the imgSrc entered', () => {
      const test = './assets/logo.png';

      component.imgSrc = test;
      fixture.detectChanges();

      const img = fixture.debugElement.query(By.css('.card__img'));
      const imgSrc = img.nativeElement.getAttribute('src');

      expect(imgSrc).toEqual(test);
    });
  });

  describe('[title]', () => {
    it('should show the title entered', () => {
      const test = 'title test';

      component.title = test;
      fixture.detectChanges();

      const title = fixture.debugElement.query(By.css('.card__title'));
      const titleTextContent = title.nativeElement?.textContent;

      expect(titleTextContent).toContain(test);
    });
  });

  describe('[description]', () => {
    it('should show the description entered', () => {
      const test = 'description test';

      component.description = test;
      fixture.detectChanges();

      const description = fixture.debugElement.query(By.css('.card__description'));
      const descriptionTextContent = description.nativeElement?.textContent;

      expect(descriptionTextContent).toContain(test);
    });
  });
});
