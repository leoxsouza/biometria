import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Alunos',
      items: [
          {label: 'Cadastrar aluno', icon: 'pi pi-fw pi-plus', routerLink: ["/alunos/inserir"]},
          {label: 'Listar alunos', icon: 'pi pi-fw pi-plus', routerLink: ["/alunos"]}
      ]
  }];

  }

}
