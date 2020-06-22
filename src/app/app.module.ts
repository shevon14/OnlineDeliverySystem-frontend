import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import{FormsModule}from '@angular/forms';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
