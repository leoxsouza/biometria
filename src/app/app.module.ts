import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import {MenubarModule} from 'primeng/menubar';
import { PRIMENG_IMPORTS } from './primeng-imports';

@NgModule({
  declarations: [
    AppComponent,
    AppTopbarComponent,
    AppMenuComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    MenubarModule,
    PRIMENG_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
