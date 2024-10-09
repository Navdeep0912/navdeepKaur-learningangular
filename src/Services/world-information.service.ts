import { Injectable } from '@angular/core';

// @ts-ignore
import {worldList} from "./Shared/mockContent.data";
import {Observable, of} from "rxjs";
// @ts-ignore
import {world} from './Model/world';


@Injectable({
  providedIn: 'root'
})
export class WorldInformationService {
  private contentList: world[] = worldList;
  constructor() { }
  getAllContent(): Observable<world>{
    return of(this.contentList);
  }

  addContent(newContent: world): Observable<worldList[]>{
    this.contentList.push(newContent);
    return of(this.contentList);
  }

  updateContent(updatedContent: world) : Observable<worldList[]>{
    // @ts-ignore
    if(index !== -1){
      // @ts-ignore
      this.contentList[index] = updatedContent;
    }
    return of(this.contentList);
  }
  deleteContent(contentId: number): Observable<world[]>{
    this.contentList = this.contentList.filter(item => item.id !== contentId);
    return of (this.contentList);
  }

  getContentById(contentId: number): Observable<world| undefined>{
    // @ts-ignore
    const content = this.contentList.find(item => item.id === contenId);
    return of(content);
  }
}
