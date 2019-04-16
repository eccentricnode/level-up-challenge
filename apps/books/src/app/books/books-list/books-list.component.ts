import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'level-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() group: FormGroup;
  @Input() books;
  @Output() searchQuery = new EventEmitter();
  @Output() selected = new EventEmitter();

  searchBooksSubmit(search) {
    this.searchQuery.emit(search.searchField);
  }

  selectBookSubmit(book) {
    this.selected.emit(book.volumeInfo);
  }
}
