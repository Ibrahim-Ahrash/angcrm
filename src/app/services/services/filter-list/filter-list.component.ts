import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { NbCardModule, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent {
  constructor(private nbRefDailog: NbDialogRef<any>) { }

  branch = [];
  @Input() FilterObject: any

  ngOnInit(): void {

    this.branch = JSON.parse(localStorage.getItem("UserData")).userBranchs;
    console.log("btanched are")
    console.log(this.branch);

  }

  OnFilterSubmit() {

    this.nbRefDailog.close(this.FilterObject);
  }
}
