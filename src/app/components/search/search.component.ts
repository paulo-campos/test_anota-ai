import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchComponent implements OnInit {
  search = new FormControl('');

  @Output() searched = new EventEmitter<string>();

  ngOnInit(): void {
    this.search.valueChanges
      .subscribe(value => this.searched.emit(value as string));
  }
}
