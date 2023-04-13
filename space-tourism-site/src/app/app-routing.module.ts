import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CrewComponent } from "./crew/crew.component";
import { DestinationComponent } from "./destination/destination.component";
import { TechnologyComponent } from "./technology/technology.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TemplatePageTitleStrategy } from "./title-strategy";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'home'
  },
  {
    path: 'crew',
    component: CrewComponent,
    title: 'crew'
  },
  {
    path: 'destination',
    component: DestinationComponent,
    title: 'destination'
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    title: 'technology'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: '**',
    component: PageNotFoundComponent,
    title: '404'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
})
export class AppRoutingModule { }


