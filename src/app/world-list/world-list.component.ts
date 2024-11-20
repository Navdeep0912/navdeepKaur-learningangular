import { Component, OnInit } from '@angular/core';

import {world} from "../../Shared/Models/world";
import { NgForOf, NgIf } from "@angular/common";
import { WorldListItemComponent } from "../world-list-item/world-list-item.component";
import { WorldInformationService } from "../Services/world-information.service";
import {worldList} from "../../Shared/mockContent";

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
      complete: () => console.log("Data Fetch Complete" + this.worldItems ),


    });
  }




  selectWorldItem(worldItem: world): void {
    this.selectedWorldItem = worldItem;
  }
}
