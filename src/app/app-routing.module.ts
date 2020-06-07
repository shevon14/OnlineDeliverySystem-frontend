import { DisplayProductsComponent } from './seller/display-products/display-products.component';
import { AddProductsComponent } from './seller/add-products/add-products.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { HomeComponent } from './home/home.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserChartComponent } from './admin/user-chart/user-chart.component';
import { RequestShopComponent } from './admin/request-shop/request-shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sellerRegistration',component:SellerRegistrationComponent},
  {path: 'myStore', component: MyStoreComponent},
  {path: 'seller', component: SellerComponent, children:[
    {path: '', component: DisplayProductsComponent},
    {path: 'addProducts', component: AddProductsComponent}
  ]},
  {path: 'admin', component: AdminComponent, children:[
    {path:'users/:type_name',component:UserChartComponent},
    {path:'shopRequests',component:RequestShopComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
