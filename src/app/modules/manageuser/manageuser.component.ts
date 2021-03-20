import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


interface Role {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss'],
})
export class ManageuserComponent implements OnInit {
  adduser = false;
  edituser = false;
  constructor(private spinner: NgxSpinnerService) { }

  users: Role[] = [
    { value: 'steak-0', viewValue: 'Admin' },
    { value: 'pizza-1', viewValue: 'Super Admin' },
    { value: 'tacos-2', viewValue: 'Testing' }

  ];



  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 550);
  }
  applyFilter(event: Event) { }

  AddUser() {
    this.adduser = true;
    this.edituser = false;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  EditUser() {
    this.edituser = true;
    this.adduser = false;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

  Cancel() {
    this.adduser = false;
    this.edituser = false;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
}
