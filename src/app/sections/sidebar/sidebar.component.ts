import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor() {}
  items :NbMenuItem[] = [
    {
      title: 'الخدمات',
      link: '/'
    },
    {
      title: 'الشركات واالفروع',
      expanded: true,
      children: [
        {
          title : "إضافة شركة",
          link : '/'
        },
       {
      title: "الشركات",
        }
      ]

    }
    ];
    ngOnInit(): void {
    }
}
