import { CommonModule } from '@angular/common';
import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class BadgeComponent {
  @Input() color = '';
  @Input() label = '';
}
