import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
@Component({
  selector: 'app-dshboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.scss']
})
export class DshboardComponent implements OnInit {
  @ViewChild('select')
  select!: MatSelect;
  allSelected=true;
  charts1: any[] 
  charts2:any[]
  selectvalue:[]=[];
  filterdata: any;
  filterform :FormGroup;
  constructor(private router: Router,) { 
    this.charts1= [
      {id:1, value: 'Infantattrition-0', viewValue: 'Infant Attrition',check:true},
      {id:2, value: 'Employeestatus-1', viewValue: 'Employee status',check:true},
      {id:3, value: 'Genderratio-2', viewValue: 'Gender Ratio',check:true},
      {id:4, value: 'Activeemployee-3', viewValue: 'Active employee',check:true},
      {id:5, value: 'EmployeeMovement-4', viewValue: 'Employee Movement',check:true},
      {id:6, value: 'Yearofjoining-5', viewValue: 'Year Of Joining',check:true},
      {id:7, value: 'Yearofreliving-6', viewValue: 'Year Of Reliving',check:true},
    ];
    this.charts2=[
      {id:1, value: 'Infantattrition-0', viewValue: 'Infant Attrition',check:true},
      {id:2, value: 'Employeestatus-1', viewValue: 'Employee status',check:true},
      {id:3, value: 'Genderratio-2', viewValue: 'Gender Ratio',check:true},
      {id:4, value: 'Activeemployee-3', viewValue: 'Active employee',check:true},
      {id:5, value: 'EmployeeMovement-4', viewValue: 'Employee Movement',check:true},
      {id:6, value: 'Yearofjoining-5', viewValue: 'Year Of Joining',check:true},
      {id:7, value: 'Yearofreliving-6', viewValue: 'Year Of Reliving',check:true},
    ];
    this.filterform = new FormGroup({
      chartfilter: new FormControl({value:'',disabled:false}),
    })
  }
  ngOnInit(): void {
    this.filterform.controls['chartfilter'].valueChanges.subscribe((ref:any)=>{
      this.selectvalue=ref
      console.log(this.selectvalue);
      
    })
  }
  optionClick() {
     if (this.selectvalue.length>0) {
      for(let item of this.charts2){
        const newvalue = this.selectvalue.find((data:any)=>{
          return item.id === data.id
        })
        if (newvalue) {
          item.check=true
        }
        else{
          item.check=false
        }
      }
     }
     else{
      this.charts2.map((ref:any)=>{
        ref.check=true
      })
     }
  }
}
