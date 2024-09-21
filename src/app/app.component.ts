import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {world} from "./world";
import {NgForOf} from "@angular/common";
import {WorldListComponent} from "./world-list/world-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, WorldListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'World Data';

  worldData : world [] = [
    {id:1, country:"India", city:"New Delhi",language:"Hindi", food:"Jalebi" },
    {id:2, country:"Canada", city:"Toronto",language:"French", food:"Poutine" },
    {id:3, country:"Australia", city:"Sydney",language:"English", food:"Roast lamb" },
    {id:4, country:"Pakistan", city :"Lahore",language:"Urdu", food:"Nihari" },
    {id:5, country:"Dubai", city:"Abu dhabi",language:"Arabic", food:"Khuzi" },
    {id:6, country:"England", city:"London",language:"British English", food:"Pudding" },
];
}
