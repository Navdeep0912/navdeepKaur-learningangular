import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService{
  private bookList = [
    {
      id: 1,
      title: 'Novel',
      author: 'R Khan',
      publishedYear: 2000
    },
    {
      id: 2,
      title: 'History Book',
      author: 'Rahat',
      publishedYear: 2005
    },
    {
      id: 3,
      title: 'Worriers',
      author: 'fateh',
      publishedYear: 2010
    }
  ];

  getBook(){
    return this.bookList;
  }

  getBookListById(id: number){
    return this.bookList.find(book => book.id === id);
  }

  addBook(book: any){
    this.bookList.push(book);
  }

  editBook(updatedBook: any){
    const index = this.bookList.findIndex(book => book.id ===updatedBook.id);
    if(index !== -1){
      this.bookList[index] = updatedBook;
    }
  }
}
