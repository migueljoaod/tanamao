import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAdsComponent } from './user-ads/user-ads.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'userads', component: UserAdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
