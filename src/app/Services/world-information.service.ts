import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {world} from "../../Shared/Models/world";
import {worldList} from "../../Shared/mockContent";

@Injectable({
  providedIn: 'root'
})
export class WorldInformationService {
  private worldList : world[] = worldList;
  constructor() { }
  getAllContent(): Observable<world[]>{
    return of(this.worldList);
  }

  addWorldInformation(newInformation: world): Observable<world>{
    this.worldList.push(newInformation);
    return of(newInformation);
  }

  updateWorldInformation(updatedInformation: world) : Observable<world | undefined>{
    const index = this.worldList.findIndex(worldList => worldList.id === updatedInformation.id)
    if(index > -1){
      this.worldList[index] = updatedInformation;
      return of(updatedInformation)
    }
    return of(undefined);
  }
  deleteWorldInformation( InformationId: number): Observable<world[]>{
    this.worldList = this.worldList.filter(item => item.id !== InformationId);
    return of (this.worldList);
  }

  getWorldInformationById(InformationId: number): Observable<world| undefined>{
    return of(this.worldList.find(worldList => worldList.id === InformationId));
  }

  generateNewId() {

  }
}
