import { Component, Input } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

let input = Input();




@Component({
  selector: 'app-world-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './world-list-item.component.html',
  styleUrl: './world-list-item.component.css'
})
export class WorldListItemComponent {
  /**
   * Input marks the property as an input property
   * that can receive data from a parent
   * ? says it is optional
   */
  @Input() item: any;
}
