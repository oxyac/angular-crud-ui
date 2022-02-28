import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  vagabondUsers: any;
  depTeam: any;

  constructor() { }

  ngOnInit(): void {
  }

  editDepartment(f: NgForm) {

  }

  addProgerToDept(f2: NgForm) {

  }

  setHead(id: number) {

  }

  unassignFromDept(id: number) {

  }
}
