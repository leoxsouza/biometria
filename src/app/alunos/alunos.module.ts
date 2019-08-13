import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { AlunoRoutes } from './alunos.route';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AlunoRoutes),
    RadioButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunosModule { }
