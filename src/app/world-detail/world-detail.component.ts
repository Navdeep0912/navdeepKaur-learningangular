import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { WorldItem } from "../Shared/Models/user";
import { NgIf } from "@angular/common";
// @ts-ignore
import { ActivatedRoute, Router } from "@angular/router";
// @ts-ignore
import { WorldService } from "./Services/world-information.service";

@Component({
  selector: 'app-world-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.scss']
})
export class WorldDetailComponent implements OnInit {
  worldItem: WorldItem | undefined;
  worldList: WorldItem[] = [];
  currentIndex: number = 0;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private worldService: WorldService,
    private router: Router
  ) {
  }


  ngOnInit(): void {

    this.worldService.getWorldItems().subscribe({
      error: ({err}: { err: any }) => {
        this.error = 'Error fetching world items';
        console.error({err: 'Error fetching world items:'}, err);
      },
      next: (items: WorldItem[]) => {
        this.worldList = items;
        this.error = null;

        // @ts-ignore
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.worldList.findIndex(item => item.id === id);
            this.worldItem = this.worldList[this.currentIndex];
          }
        });
      }
    });
  }
}



