import { FavoritesComponent } from './Favorites/favorites/favorites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from "./details/details.component"
import {LoginComponent} from "./Login/login/login.component"

const routes: Routes = [

  {path:'movies',component:HomeComponent,},
  {path:'details/:id',component:DetailsComponent},
  {path:'favorite/:id',component:FavoritesComponent},

  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
