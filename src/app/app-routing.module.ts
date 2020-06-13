import { UserSellerComponent } from './admin/user-chart/user-seller/user-seller.component';
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
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'sellerRegistration',component:SellerRegistrationComponent},
  {path: 'myStore', component: MyStoreComponent},
  {path: 'seller', component: SellerComponent, children:[
    {path: '', component: DisplayProductsComponent},
    {path: 'addProducts', component: AddProductsComponent}
  ]},
  {path: 'admin', component: AdminComponent, children:[
// <<<<<<< HEAD
//     {path:'users/:type_name',component:UserChartComponent},
//     // {path:'users/Sellers',component:UserChartComponent},
//     // {path:'users/Customers',component:UserChartComponent},
//     // {path:'users/Delivers',component:UserChartComponent},
    // {path:'shopRequests',component:RequestShopComponent},
// =======
    {path:'users',component:UserChartComponent},
    {path:'userSellers',component:UserSellerComponent},
// >>>>>>> 6be9ae62c130a4dcdec8314171795b30e226e4bb
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
