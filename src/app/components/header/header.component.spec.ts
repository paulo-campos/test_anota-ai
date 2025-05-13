import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('start', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('[logoSrc]', () => {
    it('should show the logoSrc entered', () => {
      const test = './assets/logo.png';

      component.logoSrc = test;
      fixture.detectChanges();

      const logo = fixture.debugElement.query(By.css('.header__logo'));
      const logoSrc = logo.nativeElement.getAttribute('src');

      expect(logoSrc).toEqual(test);
    });
  });

  describe('[logoAlt]', () => {
    it('should show the logoAlt entered', () => {
      const test = 'alt test';

      component.logoAlt = test;
      fixture.detectChanges();

      const logo = fixture.debugElement.query(By.css('.header__logo'));
      const logoAlt = logo.nativeElement.getAttribute('alt');

      expect(logoAlt).toEqual(test);
    });
  });

  describe('[title]', () => {
    it('should show the title entered', () => {
      const test = 'title test';

      component.title = test;
      fixture.detectChanges();

      const badge = fixture.debugElement.query(By.css('.header__title'));
      const badgeTextContent = badge.nativeElement?.textContent;

      expect(badgeTextContent).toContain(test);
    });
  });

  describe('[description]', () => {
    it('should show the title entered', () => {
      const test = 'description test';

      component.description = test;
      fixture.detectChanges();

      const badge = fixture.debugElement.query(By.css('.header__description'));
      const badgeTextContent = badge.nativeElement?.textContent;

      expect(badgeTextContent).toContain(test);
    });
  });
});
