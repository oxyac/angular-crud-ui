import {Component, destroyPlatform, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-dept',
  templateUrl: './new-dept.component.html',
  styleUrls: ['./new-dept.component.css']
})
export class NewDeptComponent implements OnInit {

  @Input()
  displayStyleDept?: string;

  @Output()
  closedNewDept = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

    console.log(this.displayStyleDept)
  }

  closePopupDept() {
    this.displayStyleDept = "none";
    this.closedNewDept.emit();
  }


  createDept(form: NgForm){
    console.log(form);
    this.closePopupDept();
  }

}
