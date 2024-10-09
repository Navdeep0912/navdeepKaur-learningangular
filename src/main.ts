import {bootstrapApplication } from '@angular/platform-browser';
import {provideRouter} from './@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import{WorldListComponent} from "./app/world-list/world-list.component";
import {WorldListItemComponent} from "./app/world-list-item/world-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


interface Routes {
}

const routes: Routes = [
  {path:'',redirectTo: '/world', pathMatch: 'full'},
  {path:'world', component:'WorldListComponent'},
  {path:'world/:id', component: 'WorldListItemComponent'},
  {path:'modify-list-item', component: 'ModifyListItemComponent'},
  {path: '**', component:PageNotFoundComponent}
];


// @ts-ignore
bootstrapApplication(AppComponent,
  {
    providers: [provideRouter(routes)]
  }).then(r => console.log('Bootstrap successful'));

