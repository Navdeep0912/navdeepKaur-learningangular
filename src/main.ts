import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {WorldListComponent} from "./app/world-list/world-list.component";
import {WorldListItemComponent} from "./app/world-list-item/world-list-item.component";
import {ModifyWorldComponent} from "./app/modify-world/modify-world.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/worldList', pathMatch: 'full'}, //default route
  { path: 'worldList', component: WorldListComponent },
  { path: 'worldList/:id', component: WorldListItemComponent },
  {path:'modify-world', component: ModifyWorldComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
