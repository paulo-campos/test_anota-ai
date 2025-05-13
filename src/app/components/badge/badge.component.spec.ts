import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('start', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('[color]', () => {
    it('should show the color entered in the background', () => {
      const color = 'black';

      component.color = color;
      fixture.detectChanges();

      const badge = fixture.debugElement.query(By.css('.badge'));
      const badgeBackgroundColor = badge.nativeElement.style.backgroundColor;

      expect(badgeBackgroundColor).toEqual(color);
    });
  });

  describe('[label]', () => {
    it('should show the text entered in the label', () => {
      const label = 'label test';

      component.label = label;
      fixture.detectChanges();

      const badge = fixture.debugElement.query(By.css('.badge'));
      const badgeTextContent = badge.nativeElement?.textContent;

      expect(badgeTextContent).toContain(label);
    });
  });
});
