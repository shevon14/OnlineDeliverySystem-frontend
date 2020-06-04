import { HomeComponent } from './home/home.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserChartComponent } from './admin/user-chart/user-chart.component';
import { RequestShopComponent } from './admin/request-shop/request-shop.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sellerRegistration',component:SellerRegistrationComponent},
  {path:'userChart',component:UserChartComponent},
  {path:'requestShop',component:RequestShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
