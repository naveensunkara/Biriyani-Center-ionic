import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { PickupPage } from '../pages/pickup/pickup';
import { ChatPage } from '../pages/chat/chat';
import { BranchList } from '../pages/branchList/branchList';
import { TabPage } from '../pages/tab/tab';
import { HomeDeliveryPage } from '../pages/homeDelivery/homeDelivery';
import { MenuCategoryPage } from '../pages/menuCategory/menuCategory';
import { CartPage } from '../pages/cart/cart';
import { CustomerPage } from '../pages/customer/customer';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LandingPage,
    PickupPage,
    ChatPage,
    BranchList,
    TabPage,
    HomeDeliveryPage,
    MenuCategoryPage,
    CartPage,
    CustomerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LandingPage,
    PickupPage,
    ChatPage,
    BranchList,
    TabPage,
    HomeDeliveryPage,
    MenuCategoryPage,
    CartPage,
    CustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {} 
