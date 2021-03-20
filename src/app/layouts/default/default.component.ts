import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
sideBarOpen = true;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {


     // spinner
     this.spinner.show();



     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 1500);
 
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}


