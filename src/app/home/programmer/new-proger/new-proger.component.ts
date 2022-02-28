import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Programmer} from "../programmer";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "../../../crud.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-new-proger',
  templateUrl: './new-proger.component.html',
  styleUrls: ['./new-proger.component.css']
})
export class NewProgerComponent implements OnInit {

  levels = ['Junior', 'Middle', 'Senior'];

  @ViewChild('f')
  newProger?: NgForm;

  @Input()
  displayStyleProger?: string;

  @Output()
  closedNewProger = new EventEmitter<any>();

  @Output()
  createdProger = new EventEmitter<any>();

  constructor(private crud: CrudService) {
  }

  ngOnInit(): void {

  }

  closePopupProger() {
    this.displayStyleProger = "none";
    this.closedNewProger.emit();
  }


  createProger(form: NgForm) {
    const proger = new Programmer
    proger.first_name = form.value.first_name;
    proger.last_name = form.value.last_name;
    proger.email = form.value.email;
    proger.phone = Number(form.value.phone);
    proger.level = Number(form.value.level);

    form.reset();
    this.crud.postProgrammer(proger);
    this.closePopupProger();
    this.createdProger.emit();
  }

  fill(){
    this.newProger?.setValue({
      email: "m.bulgakov@gmail.com",
      first_name: "Mihail",
      last_name: "Bulgakov",
      level: "1",
      phone: "123432432"
    });
    this.closePopupProger();
    this.createdProger.emit();
  }
}
