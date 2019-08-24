import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunosComponent } from "./alunos.component";
import { RouterModule } from "@angular/router";
import { AlunoRoutes } from "./alunos.route";
import { RadioButtonModule } from "primeng/radiobutton";
import { NgxViacepModule } from "@brunoc/ngx-viacep";
import { FieldsetModule } from "primeng/fieldset";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AlunoRoutes),
    RadioButtonModule,
    NgxViacepModule,
    FieldsetModule,
    CardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunosModule {}
