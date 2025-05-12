import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  @Input() logoSrc = '';
  @Input() logoAlt = '';
  @Input() title = '';
  @Input() description = '';
}
