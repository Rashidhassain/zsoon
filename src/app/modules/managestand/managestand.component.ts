import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-managestand',
  templateUrl: './managestand.component.html',
  styleUrls: ['./managestand.component.scss']
})
export class ManagestandComponent implements OnInit {

  viewstand = false
  addstand = false
  editstand = false

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }


  AddBike(){
this.addstand = true
this.editstand = false
this.viewstand = false
this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  EditBike(){
this.editstand = true
this.addstand = false
this.viewstand = false
this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  ViewStand(){
    this.viewstand = true
    this.addstand  = false
    this.editstand = false
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  Cancel(){
    this.editstand = false
    this.addstand = false
    this.viewstand = false
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }


}
