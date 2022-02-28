import {Component, destroyPlatform, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Programmer} from "../../programmer/programmer";
import {Department} from "../department";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-new-dept',
  templateUrl: './new-dept.component.html',
  styleUrls: ['./new-dept.component.css']
})
export class NewDeptComponent implements OnInit {

  newDeptForm!: FormGroup;

  @Input()
  displayStyleDept?: string;

  @Output()
  closedNewDept = new EventEmitter<any>();

  @Output()
  createdDept = new EventEmitter<any>();

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.newDeptForm = new FormGroup({
      'language': new FormControl(null, Validators.required),
      'project_name':  new FormControl(null, Validators.required)
    })

    console.log(this.displayStyleDept)

  }

  closePopupDept() {
    this.displayStyleDept = "none";
    this.closedNewDept.emit();
  }


  createDept() {
    const dept = new Department()
    dept.project_name = this.newDeptForm.value.project_name;
    dept.language = this.newDeptForm.value.language;
    this.crud.postDepartment(dept);
    this.closePopupDept();
    this.newDeptForm.reset();
    this.createdDept.emit();
  }

  fill(){
    this.newDeptForm.setValue({
      'project_name': 'SMS',
      'language': 'PHP'
    });
    this.closePopupDept();
    this.createdDept.emit();
  }


}
