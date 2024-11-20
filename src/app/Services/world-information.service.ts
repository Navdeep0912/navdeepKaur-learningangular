import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {world} from "../../Shared/Models/world";
import {worldList} from "../../Shared/mockContent";

@Injectable({
  providedIn: 'root'
})
export class WorldInformationService {
  private contentList: world[] = worldList;
  constructor() { }
  getAllContent(): Observable<world[]>{
    return of(this.contentList);
  }

  addContent(newContent: world): Observable<world>{
    this.contentList.push(newContent);
    return of(newContent);
  }

  updateContent(updatedContent: world) : Observable<world | undefined>{
    const index = this.contentList.findIndex(content => content.id === updatedContent.id)
    if(index > -1){
      this.contentList[index] = updatedContent;
      return of(updatedContent)
    }
    return of(undefined);
  }
  deleteContent(contentId: number): Observable<world[]>{
    this.contentList = this.contentList.filter(item => item.id !== contentId);
    return of (this.contentList);
  }

  getContentById(contentId: number): Observable<world| undefined>{
    return of(this.contentList.find(content => content.id === contentId));
  }
}
