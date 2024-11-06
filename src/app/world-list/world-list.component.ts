import { Component } from '@angular/core';
import {worldList} from "../../Shared/mockContent";
import {NgForOf, NgIf} from "@angular/common";
// @ts-ignore
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-world-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './world-list.component.html',
  styleUrl: './world-list.component.css'
})
export class WorldListComponent {

    protected readonly worldList = worldList;
  protected readonly error = error;
}
