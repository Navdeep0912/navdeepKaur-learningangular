import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { WorldInformationService } from "../Services/world-information.service";
import { worldItem } from "../../Model/worldItem";

@Component({
  selector: 'app-world-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css']
})
export class WorldListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'country', 'city', 'language', 'food'];
  worldList: worldItem[] = [];
  error: string | null = null;

  constructor(private worldService: WorldInformationService) {
  }

  ngOnInit() {
    this.worldService.getContent().subscribe({
      next: (data: worldItem[]) => {
        this.worldList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching world data';
        console.error("Error fetching world data", err);
      },
      complete: () => console.log("World data fetch complete!")
    });
  }

  selectedWorldItem?: worldItem;
  selectWorldItem(worldItems: worldItem): void {
    this.selectedWorldItem = worldItems;
  }
}
