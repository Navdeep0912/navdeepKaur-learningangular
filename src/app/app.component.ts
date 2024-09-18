import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';

  project1 : project = {id : 1, projectTitle : "Creative thinking", description : "The main purpose of this project is to develop people's thinking ability so that they can think creative.", startingDate : 2020, completionDate : 2021};
  project2 : project = {id : 2, projectTitle : "Helping hands", description : "The motive of this project is to motivate people to help others in anyways.", startingDate : 2021, completionDate : 2022};
  project3 : project = {id : 3, projectTitle : "Communication", description : "The aim of this project is to enhance the personality of introvert persons so that they can communicate with others without any hesitation..", startingDate : 2020, completionDate : 2022};
  project4 : project = {id : 4, projectTitle : "Skills", description : "The main purpose of this project is to motivate people to show their skills so they can get desirable jobs.", startingDate : 2018, completionDate : 2020};
  project5 : project = {id : 5, projectTitle : "Humanity", description : "The main goal of this project is to vhange people's behaviour towards others so that everyone can behave politely with others.", startingDate : 2019, completionDate : 2021};
  project6 : project = {id : 6, projectTitle : "Connection", description : "The aim of this project is to teach people how they can make their connections with others.", startingDate : 2021, completionDate : 2022};

}
