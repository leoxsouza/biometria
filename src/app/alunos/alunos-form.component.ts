import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html'
})
export class AlunosFormComponent implements OnInit {

  sexo: string;

  constructor() { }

  date1: Date;


  ngOnInit() {
  }

}
