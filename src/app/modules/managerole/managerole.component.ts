import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { TreeviewConfig, TreeviewItem, TreeviewModule } from 'ngx-treeview';


interface user {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-managerole',
  templateUrl: './managerole.component.html',
  styleUrls: ['./managerole.component.scss']
})

export class ManageroleComponent implements OnInit {
  addrole = false
  editrole = false
  dropdownEnabled = true;
  items: TreeviewItem[];
  items1: TreeviewItem[];
  items3: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
  hasAllCheckBox: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 250,
  });


  

   constructor(private spinner: NgxSpinnerService) { }

   users: user[] = [
    {value: 'steak-0', viewValue: 'Admin'},
    {value: 'pizza-1', viewValue: 'Super Admin'},
    {value: 'tacos-2', viewValue: 'Testing'}

  
  ];

  ngOnInit(): void {
    this.items = this.getBooks();

    this.spinner.show();



    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }




  getBooks(): TreeviewItem[] {
    const itCategory = new TreeviewItem({
            text: 'Dashboard', value: 1, children: [
      
              { text: 'Adminstration', value: 2, children: [
                  {text: 'Manage User', value: 21, checked: false},
                  {text: 'Manage General', value: 22, checked: false},
                  {text: 'Manage Role', value: 23, checked: false},
                ]
              },
              { text: 'Operation', value: 3, children: [
                {text: 'Manage Zones', value: 31, checked: false},
                {text: 'Manage Fleet', value: 31, checked: false},


              ]
            },
         
      
     
      { text: ' Reports', value: 8, children: [
        {text: 'Sales Reports', value: 81, checked: false},
        {text: 'Bike Reports', value: 81, checked: false},

      ]
    },
      
            ]
        });
    return [itCategory];
  }





AddRole(){
this.addrole = true
this.editrole = false
this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);

}

EditRole(){
this.editrole = true
this.addrole = false
this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
}

Cancel(){
this.addrole = false
this.editrole =  false
this.spinner.show()
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
}


}

