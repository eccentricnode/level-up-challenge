import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BooksService, Books } from '@level/core-data';

@Component({
  selector: 'level-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  form: FormGroup;
  searchQuery: string;
  searchResults: Books;
  selectedBook;

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.bookForm();
    this.resetBook();
  }

  searchBooks(search) {
    this.booksService.searchBooksApi(search)
      .subscribe(res => this.searchResults = res);
    console.log(this.searchResults);  
  }

  selectBook(book) {
    this.selectedBook = book;
  }

  resetBook() {
    const emptyBook = {
      title: '',
      authors: '',
      description: '',
      mainCategory: ''
    }
    this.selectBook(emptyBook);
  }

  bookForm() { 
    this.form = this.formBuilder.group({
      search: this.formBuilder.group({
        searchField: ['', Validators.required]
      }),
      bookList: this.formBuilder.group({
        title: [{value: '', disabled: true}], 
        authors: [{value: '', disabled: true}],
        description: [{value: '', disabled: true}],
        mainCategory: [{value: '', disabled: true}]
      })
    });
  }
}
