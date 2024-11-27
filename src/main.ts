import {bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {ProvideRouter, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyWorldListComponent} from "./app/modify-world-list/modify-world-list.component";
import {worldList} from "./Shared/mockContent";
import {world} from "./Shared/Models/world";
import {appConfig} from "./app/app.config";
import {WorldListItemComponent} from "./app/world-list-item/world-list-item.component";
import {WorldListComponent} from "./app/world-list/world-list.component";



const routes: Routes = [
  {path:'',redirectTo: '/world', pathMatch: 'full'},
  {path:'world', component:WorldListComponent},
  {path:'world/:id', component: WorldListItemComponent},
  {path:'modify-list-item', component: ModifyWorldListComponent},
  {path: '**',component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent,
  {
    providers: [provideRouter(routes)]
  }).then(r => console.log('Bootstrap successful'));

