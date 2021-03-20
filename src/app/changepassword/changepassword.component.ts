import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
     // spinner
     this.spinner.show();



     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 1500);
  }

}
