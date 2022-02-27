import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Department} from "../department";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {

  isOpen!: boolean;

  departmentInfo?: Department;

  @Input()
  departmentInfo$!: Observable<Department>;

  @Output()
  initialized = new EventEmitter<any>();

  @Output()
  closed = new EventEmitter<any>();


  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.isOpen = true;
    this.departmentInfo$.subscribe((depInfo) => {
      this.departmentInfo = depInfo;
      // this.crudService.getDepartmentInfo(depInfo.id).subscribe((data) => {
      //   this.
      // })
      this.isOpen = true;
      // this.fileDataService.getMeta(depInfo.id).subscribe((meta) => {
      //   this.meta = meta;
      // });
    });
    this.initialized.next('э');

  }
  close() {
    this.isOpen = false;
  }

}
