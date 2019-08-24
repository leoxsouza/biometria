import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html"
})
export class AlunosComponent implements OnInit {
  cols: any[];

  alunos = [
    {
      nome: "Leonardo de Souza",
      idade: "21",
      arco: "100",
      presilha: "100",
      verticilo: "100"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: "nome", header: "Nome" },
      { field: "idade", header: "Idade" },
      { field: "arco", header: "Arco (%)" },
      { field: "presilha", header: "Presilha (%)" },
      { field: "verticilo", header: "Verticilo (%)" }
    ];
  }
}
