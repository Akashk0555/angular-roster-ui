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
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssignShiftComponent,
    AssignPaycodeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FlatpickrDirective
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
