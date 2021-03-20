import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

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
    alert('rashid zsoon')
  }


}
