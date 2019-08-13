import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import { AlunosModule } from './alunos/alunos.module';
import {TableModule} from 'primeng/table';
import { AlunosFormComponent } from './alunos/alunos-form.component';
import { PRIMENG_IMPORTS } from './primeng-imports';

@NgModule({
  declarations: [
    AppComponent,
    AppTopbarComponent,
    AppMenuComponent,
    AlunosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    AlunosModule,
    TableModule,
    PRIMENG_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
