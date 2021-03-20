import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

interface Zone {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-managezones',
  templateUrl: './managezones.component.html',
  styleUrls: ['./managezones.component.scss']
})


export class ManagezonesComponent implements OnInit {
  editzone = false
  addzone = false


  
  constructor(private spinner: NgxSpinnerService) { }
  Zones: Zone[] = [
    {value: 'steak-0', viewValue: 'Z001'},
    {value: 'pizza-1', viewValue: 'Z002'},
    {value: 'tacos-2', viewValue: 'Z003'},
    {value: 'steak-0', viewValue: 'Z004'},
    {value: 'pizza-1', viewValue: 'Z005'},
    {value: 'tacos-2', viewValue: 'Z006'},
    {value: 'tacos-2', viewValue: 'Z007'},
    {value: 'tacos-2', viewValue: 'Z008'},
    {value: 'tacos-2', viewValue: 'Z009'},
    {value: 'tacos-2', viewValue: 'Z010'}
  
  ];
  ngOnInit(): void {
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 550);
  }
  AddZone(){
    this.addzone = true
    this.editzone = false
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
   
  
  EditZone(){
  this.editzone = true
  this.addzone = false
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
  
  
  Cancel(){
    this.addzone = false
    this.editzone = false
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
}
