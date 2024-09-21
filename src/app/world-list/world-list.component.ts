import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {WorldListItemComponent} from "../world-list-item/world-list-item.component";

@Component({
  selector: 'app-world-list',
  standalone: true,
  imports: [
    NgForOf,
    WorldListItemComponent
  ],
  templateUrl: './world-list.component.html',
  styleUrl: './world-list.component.css'
})
export class WorldListComponent {

  worldItems = [
    {id:1, country:'Japan', capital: 'Tokyo', language:'Japanese', landmark:'Mount Fuji' },
    {id:2, country:'France', capital: 'Paris', language:'French', landmark:'Eiffel Tower' },
    {id:3, country:'Brazil', capital: 'Brasilia', language:'Portuguese', landmark:'Christ the Redeemer' },
    {id:4, country:'Egypt', capital: 'Cairo', language:'Arabic', landmark:'Pyramids of Giza' },
  ]
}

