import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-managefleet',
  templateUrl: './managefleet.component.html',
  styleUrls: ['./managefleet.component.scss']
})
export class ManagefleetComponent implements OnInit {
  addfleet = false
  editfleet = false
  viewfleet = false
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }



  AddFleet(){
this.addfleet = true
this.editfleet = false
this.viewfleet = false
this.spinner.show();



setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);

  }

  EditFleet(){
this.editfleet = true
this.addfleet = false
this.viewfleet = false
this.spinner.show();



setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
  }
  ViewFleet(){
this.viewfleet = true
this.addfleet = false
this.editfleet = false
this.spinner.show();



setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
  }

  Cancel(){
    this.viewfleet = false
    this.addfleet = false
    this.editfleet = false
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
}
