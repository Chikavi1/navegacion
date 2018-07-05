import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {
   PrincipalPage, 
   AjustesPage,
   Ajustes2Page,  
   Pagina2Page,  
   Pagina3Page,  
   ModalPage,  
   TabsPage 
} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
   HomePage,
   PrincipalPage, 
   AjustesPage,  
   Ajustes2Page,  
   Pagina2Page,  
   Pagina3Page,  
   ModalPage,  
   TabsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     PrincipalPage, 
     AjustesPage,  
     Ajustes2Page,  
     Pagina2Page,  
     Pagina3Page,  
     ModalPage,  
     TabsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}