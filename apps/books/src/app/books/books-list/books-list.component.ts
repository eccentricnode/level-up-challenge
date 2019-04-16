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

  searchBooksSubmit(books) {
    this.searchQuery.emit(books);
    console.log(books);
  }

  selectBook(book) {
    this.selected.emit(book);
  }
}
