import { bootstrapApplication } from '@angular/platform-browser';
// @ts-ignore
import { provideRouter, Routes } from './@angular/routes';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WorldDetailComponent } from "./app/world-detail/world-detail.component";
import { WorldListComponent } from "./app/world-list/world-list.component";
import { ModifyWorldComponent } from "./app/modify-world/modify-world.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
// @ts-ignore
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
// @ts-ignore
import { InMemoryDataService } from "./app/Services/in-memory-data.service";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";


const routes: Routes = [
  { path: '', redirectTo: '/worlds', pathMatch: 'full' },
  { path: 'worlds', component: WorldListComponent },
  { path: 'worlds/:id', component: WorldDetailComponent },
  { path: 'modify-world', component: ModifyWorldComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error({err: err}));
