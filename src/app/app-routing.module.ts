import { PaymentComponent } from './payment/payment.component';
import { ProductByShopComponent } from './product-by-shop/product-by-shop.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ItemDetailsForCartComponent } from './item-details-for-cart/item-details-for-cart.component';
import { CartComponent } from './cart/cart.component';
import { EditProductsComponent } from './seller/edit-products/edit-products.component';
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
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserCustomerComponent } from './admin/user-chart/user-customer/user-customer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { ManageordersComponent } from './seller/manageorders/manageorders.component';
import { AddbutnComponent } from './components/popup/addbutn/addbutn.component';
import { UserDeliversComponent } from './admin/user-chart/user-delivers/user-delivers.component';

// import { CustomerPopUpModalComponent } from './admin/user-chart/user-customer/customer-pop-up-modal/customer-pop-up-modal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sellerRegistration', component: SellerRegistrationComponent },
  {path: 'cart', component: CartComponent},
  {path: 'orderHistory', component: OrderHistoryComponent},
  {path: 'myProfile', component: MyProfileComponent},
  {path: 'payment', component: PaymentComponent},
  // {path: 'itemDetail', component: ItemDetailsForCartComponent},
  {path : 'products', component: AllProductsComponent},
  {path : 'productsByShop', component: ProductByShopComponent},
  { path: 'myStore', component: MyStoreComponent },
  {
    path: 'seller', component: SellerComponent,
    children: [
      { path: '', component: DisplayProductsComponent },
      { path: 'addProducts', component: AddProductsComponent },
      {path: 'editProducts', component: EditProductsComponent},
      {path: 'manageOrders', component: ManageordersComponent}
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'users', component: UserChartComponent },
      { path: 'userSellers', component: UserSellerComponent },
      { path: 'userCustomers', component: UserCustomerComponent },
      { path: 'userdelivers', component: UserDeliversComponent },
      { path: 'dashboard', component: AdminDashBoardComponent },
    ]
  },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},

  {
    path: 'customer', component: AdminComponent,
  },
  
  {path: 'contact' , component: ContactComponent},
  {path: 'aboutus' , component: AboutusComponent},
  {path: 'qqq' , component: CustomerOrderHistoryComponent},
  {path: 'wew', component: AddbutnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
