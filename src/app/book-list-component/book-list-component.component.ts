import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../../Services/book.service";




@Component({
  selector: 'app-book-list-component',
  standalone: true,
  imports: [],
  templateUrl: './book-list-component.component.html',
  styleUrl: './book-list-component.component.css'
})
export class BookListComponentComponent implements OnInit {
  book: any[] = [];
  selectedBook: any;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.book = this.bookService.getBook();
  }

  OnSelect(id: number): void {
    this.selectedBook = this.book.find(book => book.id === id);
    console.log('Selected Book:', this.selectedBook);
    this.router.navigate(['/book', id]);
  }

}
