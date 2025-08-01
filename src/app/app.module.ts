import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AssignShiftComponent } from './views/dashboard/modals/assign-shift/assign-shift.component';
import { AssignPaycodeComponent } from './views/dashboard/modals/assign-paycode/assign-paycode.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { AssignPatternComponent } from './views/dashboard/modals/assign-pattern/assign-pattern.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrevUsedPatternComponent } from './views/dashboard/modals/assign-pattern/prev-used-pattern/prev-used-pattern.component';
import { UpdatedVersPattComponent } from './views/dashboard/modals/assign-pattern/updated-vers-patt/updated-vers-patt.component';
import { AssignTempEmpComponent } from './views/dashboard/modals/assign-temp-emp/assign-temp-emp.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssignShiftComponent,
    AssignPaycodeComponent,
    AssignPatternComponent,
    PrevUsedPatternComponent,
    UpdatedVersPattComponent,
    AssignTempEmpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FlatpickrDirective,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
     provideFlatpickrDefaults({
      dateFormat: 'd-M-Y',
      altInput: true,
      altFormat: 'd-M-Y',
      allowInput: true
    }) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
