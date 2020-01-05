import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/home/home.component';
import { ProductComponent } from './product/product/product.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '', component: HomeComponent }
];

// const routes: Routes = [
//   { path: 'product', component: ProductComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: '', component: HomeComponent }
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
