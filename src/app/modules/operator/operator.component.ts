import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  addoperator = false
  editoperator = false
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 550);
  }

  AddOperator() {

    this.addoperator = true
    this.editoperator = false
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  EditOperator() {
    this.editoperator = true
    this.addoperator = false
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }


  Cancel() {
    this.addoperator = false
    this.editoperator = false
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }


}
