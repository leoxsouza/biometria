import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunosComponent } from "./alunos.component";
import { RouterModule } from "@angular/router";
import { AlunoRoutes } from "./alunos.route";
import { RadioButtonModule } from "primeng/radiobutton";
import { NgxViacepModule } from "@brunoc/ngx-viacep";
import { FieldsetModule } from "primeng/fieldset";
import { CardModule } from "primeng/card";
import { AlunosFormComponent } from "./alunos-form.component";
import { PRIMENG_IMPORTS } from "../primeng-imports";

@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AlunoRoutes),
    RadioButtonModule,
    NgxViacepModule,
    FieldsetModule,
    CardModule,
    PRIMENG_IMPORTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunosModule {}
