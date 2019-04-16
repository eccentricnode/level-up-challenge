import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'level-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent {
  @Input() group: FormGroup;
  @Input() selectedBook;
  @Output() reset = new EventEmitter();

  resetBookForm() {
    this.reset.emit();
  }
}
