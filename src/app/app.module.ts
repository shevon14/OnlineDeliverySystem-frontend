import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { BannerSliderComponent } from './home/banner-slider/banner-slider.component';
import { ItemCardSliderComponent } from './home/item-card-slider/item-card-slider.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { UserChartComponent } from './admin/user-chart/user-chart.component';
import { RequestShopComponent } from './admin/request-shop/request-shop.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductsComponent } from './seller/add-products/add-products.component';
import { DisplayProductsComponent } from './seller/display-products/display-products.component';
import { CategoriesTabComponent } from './home/categories-tab/categories-tab.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { UserSellerComponent } from './admin/user-chart/user-seller/user-seller.component';
import { SellerPopUpModalComponent } from './admin/user-chart/user-seller/seller-pop-up-modal/seller-pop-up-modal.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerDetailsService } from './services/customer-reg.service';
import { EditProductsComponent } from './seller/edit-products/edit-products.component';
import { HomeBottomComponent } from './home/home-bottom/home-bottom.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailsForCartComponent } from './item-details-for-cart/item-details-for-cart.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserCustomerComponent } from './admin/user-chart/user-customer/user-customer.component';
import { CustomerPopUpModalComponent } from './admin/user-chart/user-customer/customer-pop-up-modal/customer-pop-up-modal.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { ProductByShopComponent } from './product-by-shop/product-by-shop.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { CustomerOrderHistoryDetailsComponent } from './customer-order-history-details/customer-order-history-details.component';
import { ManageordersComponent } from './seller/manageorders/manageorders.component';
import { AddbutnComponent } from './components/popup/addbutn/addbutn.component';
import { UserDeliversComponent } from './admin/user-chart/user-delivers/user-delivers.component';
import { ServerStartPoint } from './services/server.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerRegistrationComponent,
    BannerSliderComponent,
    ItemCardSliderComponent,
    AdminHeaderComponent,
    UserChartComponent,
    RequestShopComponent,
    MyStoreComponent,
    AdminComponent,
    SellerComponent,
    AddProductsComponent,
    DisplayProductsComponent,
    CategoriesTabComponent,
    FooterComponent,
    LoginComponent,
    UserSellerComponent,
    SellerPopUpModalComponent,
    AllProductsComponent,
    SigninComponent,
    SignupComponent,
    EditProductsComponent,
    HomeBottomComponent,
    CartComponent,
    ItemDetailsForCartComponent,
    MyProfileComponent,
    OrderHistoryComponent,
    UserCustomerComponent,
    CustomerPopUpModalComponent,
    AdminDashBoardComponent,
    ProductByShopComponent,
	ContactComponent,
    AboutusComponent,
    PaymentComponent,
    CustomerOrderHistoryComponent,
    CustomerOrderHistoryDetailsComponent,
    ManageordersComponent,
    AddbutnComponent,
    UserDeliversComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthenticationService,AuthGuardService,ServerStartPoint],
  bootstrap: [AppComponent]
})
export class AppModule { }
