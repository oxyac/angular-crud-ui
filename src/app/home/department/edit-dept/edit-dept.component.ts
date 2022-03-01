import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CrudService} from "../../../crud.service";
import {Department} from "../department";
import {ActivatedRoute} from "@angular/router";
import {Programmer} from "../../programmer/programmer";

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {

  vagabondUsers?: Programmer[];
  depTeam?: Programmer[];
  isFormD = true;


  department!: Department;

  editDeptForm!: FormGroup;



  constructor(private crud : CrudService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editDeptForm = new FormGroup({
      'language': new FormControl(null, Validators.required),
      'project_name':  new FormControl(null, Validators.required),
    });

    this.crud.getDeptInfo(this.route.snapshot.params['id']).subscribe((data: any) => {
      this.department = data.department;
      this.depTeam = data.team;
      this.vagabondUsers = data.progers;
      console.log(this.department);
      console.log(this.depTeam);

      this.editDeptForm.setValue({
        'language': this.department.language,
        'project_name': this.department.project_name,
      });
    })

    this.editDeptForm.disable();
  }

  editDepartment() {
    this.department.language = this.editDeptForm.value.language;
    this.department.project_name = this.editDeptForm.value.project_name;
    this.crud.updateDeptById(this.department);
  }

  addProgerToDept(f2: NgForm) {
    this.crud.assignProgToDept(f2.value.id_depId, this.department.id);
  }

  setHead(id: number) {
    this.crud.setDeptHead(id, this.department.id);
  }

  unassignFromDept(id: number) {
    this.crud.unassignProgFromDept(id, this.department.id);
  }

  enable(){
    this.editDeptForm.enable();
  }
}
