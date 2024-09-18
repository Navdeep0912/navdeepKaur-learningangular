import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {world} from "./world";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'World Data';

  worldData1 : world = {id:1, country:"India", city:"New Delhi",language:"Hindi", food:"Jalebi" };
  worldData2 : world = {id:2, country:"Canada", city:"Toronto",language:"French", food:"Poutine" };
  worldData3 : world = {id:3, country:"Australia", city:"Sydney",language:"English", food:"Roast lamb" };
  worldData4 : world = {id:4, country:"Pakistan", city :"Lahore",language:"Urdu", food:"Nihari" };
  worldData5 : world = {id:5, country:"Dubai", city:"Abu dhabi",language:"Arabic", food:"Khuzi" };
  worldData6 : world = {id:6, country:"England", city:"London",language:"British English", food:"Pudding" };
}
