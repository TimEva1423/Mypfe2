import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';



const routes: Routes=[
  {
    path:'', redirectTo:'homepage' , pathMatch:'full'
  },
 
  {
    path:'BEBE-MAMAN', component:NavbarComponent  
   },

  {
    path:'login', component:LoginComponent
  },
  


  {
    path:'category', component:CategoryComponent
  },
  
  {
    path:'homepage', component:HomepageComponent
  },
 
  {
    path:'mrr', component:OrderModelComponent
  },
  {
    path:'panier', component:PanierComponent
  },
  {
    path:'useraccount', component:UseraccountComponent
  }
 
  
];



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { HdsliderComponent } from './hdslider/hdslider.component';
import { SwiperComponent } from './swiper/swiper.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { ProductCardModelComponent } from './product-card-model/product-card-model.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { OrderModelComponent } from './order-model/order-model.component';
import { HeadnavbarComponent } from './headnavbar/headnavbar.component';
import { PanierComponent } from './panier/panier.component';
import { BrandfootComponent } from './brandfoot/brandfoot.component';
import { UseraccountComponent } from './useraccount/useraccount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    MainComponent,
    ProductCardListComponent,
    HdsliderComponent,
    SwiperComponent,
    LoginComponent,
    CategoryComponent,
    AccountComponent,
    ProductCardModelComponent,
    ChatboxComponent,
    OrderModelComponent,
    HeadnavbarComponent,
    PanierComponent,
    BrandfootComponent,
    UseraccountComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
