import { Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form.component';


export const AlunoRoutes: Routes = [
    { 
        path: 'alunos', component: AlunosComponent
    },
    {
        path: 'alunos/:acao', component: AlunosFormComponent
    }
];