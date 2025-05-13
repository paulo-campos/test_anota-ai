import {
  Component,
  Input
} from '@angular/core';

import { TYPES } from '@constants/type.constants';
import { IType } from '@interfaces/item.interfaces';
import { BadgeComponent } from '@components/badge/badge.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [
    BadgeComponent
  ]
})
export class CardComponent {
  TYPES = TYPES;

  @Input() img = '';
  @Input() title = '';
  @Input() description = '';
  @Input() type: IType = '1';
}
