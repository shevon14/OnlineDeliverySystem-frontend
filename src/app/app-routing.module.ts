import { AllProductsComponent } from './all-products/all-products.component';
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
import { SigninComponent} from './signin/signin.component';
import { SignupComponent} from './signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sellerRegistration', component: SellerRegistrationComponent },
  { path: 'myStore', component: MyStoreComponent },
  {
    path: 'seller', component: SellerComponent,
    children: [
      { path: '', component: DisplayProductsComponent },
      { path: 'addProducts', component: AddProductsComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'users', component: UserChartComponent },
      { path: 'userSellers', component: UserSellerComponent },
    ]
  },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
