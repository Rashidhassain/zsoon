import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
     // spinner
     this.spinner.show();



     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 1500);
  }
  submit(){
    alert("Welcome to zsoon page")
  }
}
