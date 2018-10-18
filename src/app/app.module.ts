import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalListPage, ModalContentPage } from '../pages/modal-list/modal-list';
import { NavigationPage, NavigationDetailsPage } from '../pages/navigation/navigation';
import { SearchbarPage } from '../pages/searchbar/searchbar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ModalListPage,
    ModalContentPage,
    NavigationPage,
    NavigationDetailsPage,
    SearchbarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ModalListPage,
    ModalContentPage,
    NavigationPage,
    NavigationDetailsPage,
    SearchbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
