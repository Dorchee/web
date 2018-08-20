import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'productDetail', component: ProductDetailComponent }
];

@NgModule({
	exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
