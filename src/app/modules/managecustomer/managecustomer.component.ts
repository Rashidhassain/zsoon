import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-managecustomer',
  templateUrl: './managecustomer.component.html',
  styleUrls: ['./managecustomer.component.scss']
})
export class ManagecustomerComponent implements OnInit {
  addcustomer = false
  editcustomer = false
  viewcustomer = false
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }


  AddCustomer(){
    this.addcustomer = true
    this.editcustomer = false
    this.viewcustomer = false

    this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
  }


  EditCustomer(){
    this.editcustomer = true
    this.addcustomer = false
    this.viewcustomer = false
    this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
  }
  ViewCustomer(){
    this.viewcustomer = true
    this.addcustomer = false
    this.editcustomer = false
    this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
  }

  Cancel(){
    this.viewcustomer = false
    this.addcustomer = false
    this.editcustomer = false
    this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
  }

}
