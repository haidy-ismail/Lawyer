import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WhatDoComponent } from './components/what-do/what-do.component';
import { BlogComponent } from './components/blog/blog.component';
import { AliComponent } from './components/lawyers/ali/ali.component';
import { AhmedComponent } from './components/lawyers/ahmed/ahmed.component';
import { CompaniesFieldComponent } from './components/companies-field/companies-field.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'what_we',component:WhatDoComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'aliAmiri',component:AliComponent},
  {path:'ahmedAmiri',component:AhmedComponent},
  {path:'Companies',component:CompaniesFieldComponent},
  {path:'about',component:AboutComponent},
  {path:'articles', component:ArticleComponent},
  // {path:'dash',component:DashboardComponent,canActivate: [authGuard]},
  // {path:'login', component:LoginComponent},
  {path:'**',component:HomeComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
