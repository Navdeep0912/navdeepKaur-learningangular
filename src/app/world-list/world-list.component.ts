import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgForOf, NgIf, UpperCasePipe } from "@angular/common";
// @ts-ignore
import { RouterLink } from "@angular/router";
import {WorldItemDetailComponent} from "../world-detail/world-detail.component";
import { worldItem } from '../../Shared/Models/worldItem';

@Component({
  selector: 'app-world-item-list',
  standalone: true,
  imports: [
    NgForOf,
    WorldItemDetailComponent,
    RouterLink,
    NgIf,
    CurrencyPipe,
    UpperCasePipe
  ],
  templateUrl: './world-item-list.component.html',
  styleUrl: './world-item-list.component.scss'
})
export class WorldItemListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'country', 'city', 'language', 'game', 'food'];
  worldItemList: worldItem[] = [];
  error: string | null = null;

  // @ts-ignore
  constructor(private worldIInformationService: worldInformationService) {
  }

  ngOnInit() {
    this.worldIInformationService.getWorldItems().subscribe({
      complete: () => console.log("World item data fetch complete!"),
      error: e => {
        this.error = 'Error fetching world items';
        console.error({e: "Error fetching World Items"}, e);
      },
      next: (data: worldItem[]) => {
        this.worldItemList = data;
        this.error = null;
      }
    });
  }

  selectedWorldItem?: worldItem;
  selectWorldItem(worldItem: worldItem): void {
    this.selectedWorldItem = worldItem;
  }
}
