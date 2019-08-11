import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { AlunoRoutes } from './alunos.route';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AlunoRoutes),
    ButtonModule,
    TableModule
  ]
})
export class AlunosModule { }
