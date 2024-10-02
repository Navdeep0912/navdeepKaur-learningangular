import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {world} from "./Models/world";
import { NgForOf, NgIf } from "@angular/common";
import { WorldListItemComponent } from "../world-list-item/world-list-item.component";
import { WorldInformationService } from "../../Services/world-information.service";

@Component({
  selector: 'app-world-list',
  standalone: true,
  imports: [
    NgForOf,
    WorldListItemComponent,
    NgIf
  ],
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css'] // Corrected to styleUrls from styleUrl
})
export class WorldListComponent implements OnInit {

  worldItems: world[] = [];
  selectedWorldItem?: world;

  constructor(private worldInformationService: WorldInformationService) {
  }

  ngOnInit() {
    this.worldInformationService.getAllContent().subscribe({
      next: (data: world[]) => this.worldItems = data,
      error: err => {
        console.error("Error fetching world items", err);
      },
      complete: () => console.log("World data fetch complete!")
    });
  }

  selectWorldItem(worldItem: world): void {
    this.selectedWorldItem = worldItem;
  }
}
