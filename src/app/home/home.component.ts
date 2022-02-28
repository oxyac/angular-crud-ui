import { Component, OnInit } from '@angular/core';
import {CrudService} from "../crud.service";
import {Department} from "./department/department";
import {Programmer} from "./programmer/programmer";
import {Subject, timeout} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayStyleDept = "none";
  displayStyleProger = "none";

  private depId_count?: object;
  public programmers?: Programmer[];
  public departments?: Department[];
  isOpen!: boolean;

  modalDepartmentInfo$: Subject<Department> = new Subject();
  modalDepartment?: Department;
  modalVisible = false;

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(){
    this.crudService.getAll().subscribe((data: any) => {
      this.programmers = Object.values(data.progers);
      this.departments = Object.values(data.departments);
      this.depId_count = data.depId_count;
      console.log(this.departments);
    })
  }

  showModalDepartmentInfo(department: Department) {
    this.modalVisible = true;
    this.modalDepartment = department;
  }

  openPopupDept() {
    this.displayStyleDept = "block";
    console.log(this.displayStyleDept);
  }


  closePopupDept() {
    this.displayStyleDept = "none";
  }

  openPopupProger() {
    this.displayStyleProger = "block";
    console.log(this.displayStyleProger);
  }

  closePopupProger() {
    this.displayStyleProger = "none";
  }

  deleteDept(id: number) {
    this.crudService.deleteDeptById(id);
    timeout(1000);
    this.fetchAll();
  }

}
