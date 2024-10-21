import {Component, input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
// @ts-ignore
import {Book} from "../../Models/book";
import * as console from "node:console";
// @ts-ignore
import {Book} from "../../book";

@Component({
  selector: 'app-book-detail-component',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './book-detail-component.component.html',
  styleUrl: './book-detail-component.component.css'
})
export class BookDetailComponentComponent implements OnInit{
  private bookService: any;
  get book(): any {
    return this._book;
  }

  // @ts-ignore
  @input()() set book(value:any) {
    this._book = value;
    console.log('Book List in Detail Component:', this._book);
  }
  private _book: any;

  get bookList():any{
    return this._book;
  }

  // @ts-ignore
  constructor(private route: ActivatedRoute, private book: Book) {}

  ngOnInit() : void{
    this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
      this.book = this.bookService.getBookListById(id);
});
}
}
