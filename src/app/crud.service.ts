import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Programmer} from "./home/programmer/programmer";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private phpEndpoint = 'http://localhost:8080';
  private headers =new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'})


  constructor(private httpClient: HttpClient) {

  }

  public getAll(){
    return this.httpClient.get(this.phpEndpoint + '/index.php');

  }

  public getDepartmentInfo(id: number){
    return this.httpClient.get(this.phpEndpoint + '/index.php?controller=department&action=details&id=' + id);
  }

  public postProgrammer(proger: Programmer){
    console.log(proger);
    this.httpClient.post(this.phpEndpoint + '/index.php?controller=programmer&action=create', proger, { 'headers': this.headers })
      .subscribe((res : any) => {
        console.log(res);
      })
  }

}
