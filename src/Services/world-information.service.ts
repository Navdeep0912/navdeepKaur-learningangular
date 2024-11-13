import { Injectable } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { worldItem } from '../Shared/Models/worldItem';


@Injectable({
  providedIn: 'root'
})
export class WorldInformationService {
  private apiUrl = 'api/worldList';
  private worldItem: worldItem[] = [];

  constructor(private http: HttpClient) { }

  // CRUD operations using HTTP Requests
  getAllWorldItem(): Observable<worldItem[]> {
    return this.http.get<worldItem[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getContentById(Id: number): Observable<worldItem | undefined> {
    return this.http.get<worldItem>(`${this.apiUrl}/${Id}`).pipe(catchError(this.handleError));
  }

  addItem(newItem: worldItem): Observable<worldItem> {
    newItem.id = this.generateNewId();
    return this.http.post<worldItem>(this.apiUrl, newItem).pipe(catchError(this.handleError));
  }

  updateItem(updatedItem: worldItem): Observable<worldItem | undefined> {
    const url = `${this.apiUrl}/${updatedItem.id}`;
    return this.http.put<worldItem>(url, updatedItem).pipe(catchError(this.handleError));
  }

  deleteItem(Id: number): Observable<{}> {
    const url = `${this.apiUrl}/${Id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.worldItem.length > 0 ? Math.max(...this.worldItem.map(worldItem => worldItem.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse) {
    console.error({err: {err: 'API error:'}}, error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
