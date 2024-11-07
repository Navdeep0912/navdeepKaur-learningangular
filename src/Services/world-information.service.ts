import { Injectable } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { world } from './Model/world';

@Injectable({
  providedIn: 'root'
})
export class WorldInformationService {
  private apiUrl = 'api/worldList';
  private contentList: world[] = [];

  constructor(private http: HttpClient) { }

  // CRUD operations using HTTP Requests
  getAllContent(): Observable<world[]> {
    return this.http.get<world[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getContentById(contentId: number): Observable<world | undefined> {
    return this.http.get<world>(`${this.apiUrl}/${contentId}`).pipe(catchError(this.handleError));
  }

  addContent(newContent: world): Observable<world> {
    newContent.id = this.generateNewId();
    return this.http.post<world>(this.apiUrl, newContent).pipe(catchError(this.handleError));
  }

  updateContent(updatedContent: world): Observable<world | undefined> {
    const url = `${this.apiUrl}/${updatedContent.id}`;
    return this.http.put<world>(url, updatedContent).pipe(catchError(this.handleError));
  }

  deleteContent(contentId: number): Observable<{}> {
    const url = `${this.apiUrl}/${contentId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  //ID
  private generateNewId(): number {
    return this.contentList.length > 0 ? Math.max(...this.contentList.map(content => content.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
