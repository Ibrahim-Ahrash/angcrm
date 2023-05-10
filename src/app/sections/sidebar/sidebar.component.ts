import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';
import { CompanyComponent } from 'src/app/services/company/company/company.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private diag: NbDialogService
  ) { }
  items: NbMenuItem[] = [
    {
      title: 'الخدمات'
    },
    {
      title: 'الشركات واالفروع',
      expanded: true,
      children: [
        {
          title: "إضافة شركة"
        },
        {
          title: "الشركات",
          link: '/custmers'
        }
      ]

    }
  ];
  ngOnInit(): void {
  }
  openCust() {
    this.diag.open(CompanyComponent)
  }

}
