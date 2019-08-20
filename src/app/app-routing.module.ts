import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './components/item-list/item-list.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'userads', component: ItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
