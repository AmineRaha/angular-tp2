import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './elements/pages/users/list/list.component';
import { HomeComponent } from './elements/pages/home/home.component';
import { AddComponent } from './elements/pages/users/add/add.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users/list', component: ListComponent },
    { path: 'users/add', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
