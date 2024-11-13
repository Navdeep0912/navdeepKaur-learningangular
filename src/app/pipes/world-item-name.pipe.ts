import { Pipe, PipeTransform } from '@angular/core';
import {worldItem} from "../../Shared/Models/worldItem";
import {worldList} from "../../Shared/mockContent";

@Pipe({
  name: 'worldItemName',
  standalone: true
})
export class WorldItemNamePipe implements PipeTransform {

  transform(worldItem: worldItem) {
    return `${worldItem.city}, ${worldItem.country}`;
  }
}

