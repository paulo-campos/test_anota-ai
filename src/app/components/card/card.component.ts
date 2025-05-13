import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
  @Input() img = '';
  @Input() title = '';
  @Input() description = '';
  @Input() type = '';
}
