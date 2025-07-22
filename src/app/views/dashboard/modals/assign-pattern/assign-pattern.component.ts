import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrevUsedPatternComponent } from './prev-used-pattern/prev-used-pattern.component';

@Component({
  selector: 'app-assign-pattern',
  templateUrl: './assign-pattern.component.html',
  styleUrl: './assign-pattern.component.scss'
})
export class AssignPatternComponent implements OnInit{
  
  assignPatternForm!:FormGroup;

constructor(private modalService:NgbModal,
            private fb:FormBuilder){}
  ngOnInit(): void {
    this.assignPatternForm=this.fb.group({
        patternname:[null,Validators.required],
        recurring:[],
        noofdaysorweek:[],
        startdate:[],
        enddate:[],
        description:[],
        openpattern:[],
        publishto:[],
        patternschedule:[]
    });
  }




openNestedModal(): void {
  this.modalService.open(PrevUsedPatternComponent, { size: 'md', scrollable: true });
}
onSubmit(): void {
  if (this.assignPatternForm.valid) {
    console.log('Form Submitted:', this.assignPatternForm.value);
    // TODO: add login logic
  } else {
    this.assignPatternForm.markAllAsTouched();
  }
}

get patternname() {
  return this.assignPatternForm.get('patternname');
}
get startdate(){
  return this.assignPatternForm.get('startdate');
}
get openpattern(){
  return this.assignPatternForm.get('openpattern');
}
get enddate(){
  return this.assignPatternForm.get('enddate');
}
get description(){
  return this.assignPatternForm.get('description');
}
}
