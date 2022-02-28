import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ClarityModule, ClrModalModule} from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDeptComponent } from './home/department/new-dept/new-dept.component';
import { EditDeptComponent } from './home/department/edit-dept/edit-dept.component';
import { NewProgerComponent } from './home/programmer/new-proger/new-proger.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ProgrammersComponent} from "./programmers/programmers.component";
import {DepartmentsComponent} from "./departments/departments.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'programmers', component: ProgrammersComponent},
  {path: 'departments', component: DepartmentsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewDeptComponent,
    EditDeptComponent,
    NewDeptComponent,
    NewProgerComponent,
    DepartmentsComponent,
    ProgrammersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClrModalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
