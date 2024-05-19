import { Component } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item.model';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent {
  sidebarItems: SidebarItem[] = [
    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        { title: 'Virtual Reality', link: '/dashboards/virtual-reality' },
        { title: 'CRM', link: '/dashboards/crm' }
      ]
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ]
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ]
    }
  ];


  toggle(item: SidebarItem): void {
    // item.expanded = !item.expanded;
  }
}
