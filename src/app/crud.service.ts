import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Programmer} from "./home/programmer/programmer";
import {parseJson} from "@angular/cli/utilities/json-file";
import {Department} from "./home/department/department";

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
    this.httpClient.post(this.phpEndpoint + '/index.php?controller=programmer&action=create',
      proger)
      .subscribe((res : any) => {
        console.log(res);
      })
  }

  public postDepartment(dept: Department){
    this.httpClient.post(this.phpEndpoint + '/index.php?controller=department&action=create',
      dept)
      .subscribe((res : any) => {
        console.log(res);
      })
  }

  deleteDeptById(id: number){
    this.httpClient.delete(this.phpEndpoint + "/index.php?controller=department&action=delete&id=" + id)
      .subscribe((res: any) => console.log(res));
  }



}
