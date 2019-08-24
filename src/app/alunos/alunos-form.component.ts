import { Component, OnInit } from "@angular/core";
import { NgxViacepService, ErroCep } from "@brunoc/ngx-viacep";
import { Aluno } from "./alunos.model";
import { Endereco } from "./endereco.model";

@Component({
  selector: "app-alunos-form",
  templateUrl: "./alunos-form.component.html"
})
export class AlunosFormComponent implements OnInit {
  sexo: string;

  constructor(private viacep: NgxViacepService) {}

  date1: Date;

  // aluno: Aluno = new Aluno();
  endereco: Endereco = new Endereco();

  ngOnInit() {}

  getCamposEndereco() {
    this.viacep
      .buscarPorCep(this.endereco.cep)
      .then(endereco => {
        this.endereco.bairro = endereco.bairro;
        this.endereco.localidade = endereco.localidade;
        this.endereco.logradouro = endereco.logradouro;
        console.log(endereco);
      })
      .catch((error: ErroCep) => {
        // Alguma coisa deu errado :/
        console.log(error.message);
      });
  }
}
