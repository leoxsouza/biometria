import { Component, OnInit } from "@angular/core";
import { NgxViacepService, ErroCep } from "@brunoc/ngx-viacep";
import { Aluno } from "./alunos.model";
import { Endereco } from "./endereco.model";
import { NgForm } from "@angular/forms";
import { AlunosService } from "./alunos.service";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { finalize } from "rxjs/operators";
import { Contato } from "./contato.model";
import { Router } from "@angular/router";
import { PageNotificationService } from "../shared/page-notification.service";

@Component({
  selector: "app-alunos-form",
  templateUrl: "./alunos-form.component.html"
})
export class AlunosFormComponent implements OnInit {
  sexo: string;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private viacep: NgxViacepService,
    private service: AlunosService,
    private router: Router,
    private pageNotificationService: PageNotificationService
  ) {}

  date1: Date;

  aluno: Aluno = new Aluno();
  endereco: Endereco = new Endereco();
  contato: Contato[] = [
    new Contato("Residencial"),
    new Contato("Celular"),
    new Contato("Comercial")
  ];

  ngOnInit() {}

  getCamposEndereco() {
    this.viacep
      .buscarPorCep(this.endereco.cep)
      .then(endereco => {
        this.endereco.bairro = endereco.bairro;
        this.endereco.cidade = endereco.localidade;
        this.endereco.rua = endereco.logradouro;
      })
      .catch((error: ErroCep) => {
        // Alguma coisa deu errado :/
        console.log(error.message);
      });
  }

  persistirRegistro(form: NgForm) {
    if (!form.valid) {
      this.pageNotificationService.addErrorMsg(
        "Favor preencher campo(s) obrigatório(s)"
      );
      return;
    }

    console.log(this.contato);

    this.blockUI.start("MensagemUtil.BLOCKUI_SALVANDO");
    this.service
      .save({
        aluno: this.aluno,
        endereco: this.endereco,
        contato: this.contato
      })
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(() => {
        this.router.navigate(["/"]);
        this.pageNotificationService.addCreateMsg();
      });
  }
}
