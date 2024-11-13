import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
// @ts-ignore
import { WorldInformationService } from "../Services/world-information.service";
// @ts-ignore
import {WorldItem} from "../Shared/Models/worldItem";
// @ts-ignore
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-world-item-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './world-item-detail.component.html',
  styleUrl: './world-item-detail.component.scss'
})
export class WorldItemDetailComponent implements OnInit {

  worldItem: WorldItem | undefined;
  worldItemList: WorldItem[] = [];
  currentIndex: number = 0;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private worldInformationService: WorldInformationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.worldInformationService.getAllItems().subscribe({
      next: (worldItems: WorldItem[]) => {
        this.worldItemList = worldItems;
        this.error = null;

        // @ts-ignore
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.worldItemList.findIndex(item => item.id === id);
            this.worldItem = this.worldItemList[this.currentIndex];
          }
        });
      },
      error: err => {
        this.error = 'Error fetching world items';
        console.error({err: 'Error fetching world items:'}, err);
      }
    });
  }


  goBack(): void {
    this.router.navigate(['/world-detail']);
  }


  goForward(): void {
    if (this.currentIndex < this.worldItemList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/world-detail', this.worldItemList[this.currentIndex].id]);
    }
  }

  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/world-detail', this.worldItemList[this.currentIndex].id]);
    }
  }
}
