import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AlunosService {
  resourceUrl = "http://localhost:3333/alunos";
  constructor(private httpClient: HttpClient) {}

  save(registro: any): Observable<any> {
    return this.httpClient.post(this.resourceUrl, registro);
  }
}
