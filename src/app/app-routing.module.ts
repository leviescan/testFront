import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersformsComponent } from './usersforms/usersforms.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [

  { path: '', component:UserslistComponent},
  { path: 'users', component:UserslistComponent},
  { path: 'users/create', component:UsersformsComponent},
  { path: 'users/edit/:id', component:UsersformsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
