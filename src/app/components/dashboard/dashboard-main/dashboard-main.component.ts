import { Component, OnInit, inject } from '@angular/core';
import { SidebarCaptionModel } from '../models/caption-models/sidebar.caption.model';
import { TranslateService } from '@ngx-translate/core';
import { SideBarSectionModel } from '../models/sidebar-item.model';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent implements OnInit {
  //#region Properties
  private _translateService = inject(TranslateService);

  public sidebarItems = sidebarItems;

  public sidebarCaption: SidebarCaptionModel | undefined;
  private readonly _captionPath = {
    sidebarPath: 'dashboard.sidebar'
  }
  //#endregion

  //#region Lifecycle methods
  public ngOnInit(): void {
    this._getCaptions();
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    this._translateService.get(this._captionPath.sidebarPath).subscribe((caption) => {
      this.sidebarCaption = caption;
    });
  }
  //#endregion
}

const sidebarItems: SideBarSectionModel[] = [
  {
    items: [
      {
        title: 'Dashboards',
        icon: 'home',
        children: [
          { title: 'Default', link: '/dashboards/default' },
          { title: 'Automotive', link: '/dashboards/automotive' },
          { title: 'Smart Home', link: '/dashboards/smart-home' },
          {
            title: 'Virtual Reality',
            link: '/dashboards/virtual-reality',
            children: [
              { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
              { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' }
            ]
          },
          { title: 'CRM', link: '/dashboards/crm' }
        ],
        isExpanded: false
      }
    ]
  },
  {
    sectionTitle: 'Pages',
    items: [
      {
        title: 'Pages',
        icon: 'domain',
        children: [
          {
            title: 'Profile',
            link: '/pages/profile',
            children: [
              { title: 'Profile Overview', link: '/pages/profile/overview' },
              { title: 'Teams', link: '/pages/profile/teams' },
              { title: 'All Projects', link: '/pages/profile/all-projects' }
            ]
          },
          {
            title: 'Users',
            link: '/pages/users',
            children: [
              { title: 'Reports', link: '/pages/users/reports' },
              { title: 'New User', link: '/pages/users/new-user' }
            ]
          },
          {
            title: 'Account',
            link: '/pages/account',
            children: [
              { title: 'Settings', link: '/pages/account/settings' },
              { title: 'Billing', link: '/pages/account/billing' },
              { title: 'Invoice', link: '/pages/account/invoice' },
              { title: 'Security', link: '/pages/account/security' }
            ]
          },
          {
            title: 'Project',
            link: '/pages/project',
            children: [
              { title: 'General', link: '/pages/project/general' },
              { title: 'Timeline', link: '/pages/project/timeline' },
              { title: 'New Project', link: '/pages/project/new-project' }
            ]
          },
          { title: 'Pricing Page', link: '/pages/pricing-page' },
          { title: 'Messages', link: '/pages/message' },
          { title: 'Widgets', link: '/pages/widgets' },
          { title: 'Charts', link: '/pages/charts' },
          { title: 'Sweet Alerts', link: '/pages/sweet-alerts' },
          { title: 'RTL', link: '/pages/rtl' },
          { title: 'Notifications', link: '/pages/notifications' }
        ],
        isExpanded: false
      }
    ]
  },
  {
    items: [
      {
        title: 'Applications',
        icon: 'construction',
        children: [
          { title: 'Kanban', link: '/applications/kanban' },
          { title: 'Wizard', link: '/applications/wizard' },
          { title: 'DataTables', link: '/applications/data-tables' },
          { title: 'Calendar', link: '/applications/calendar' },
          { title: 'Analytics', link: '/applications/analytics' }
        ]
      }
    ]
  },
  {
    items: [
      {
        title: 'Ecommerce',
        icon: 'shopping_cart',
        children: [
          { title: 'Overview', link: '/ecommerce/overview' },
          {
            title: 'Products',
            children: [
              { title: 'New Product', link: '/ecommerce/products/new' },
              { title: 'Edit Product', link: '/ecommerce/products/edit' },
              { title: 'Product Page', link: '/ecommerce/products/page' },
              { title: 'Products List', link: '/ecommerce/products/list' }
            ]
          },
          {
            title: 'Orders',
            children: [
              { title: 'Order List', link: '/ecommerce/orders/list' },
              { title: 'Order Details', link: '/ecommerce/orders/details' }
            ]
          },
          { title: 'Referral', link: '/ecommerce/referral' }
        ],
        isExpanded: false
      }
    ]
  },
  {
    sectionTitle: 'Docs',
    items: [
      {
        title: 'Docs',
        icon: 'fa fa-book',
        children: [
          { title: 'Basic', link: '/docs/basic' },
          { title: 'Components', link: '/docs/components' },
          { title: 'Changelog', link: '/docs/changelog' }
        ],
        isExpanded: false
      }
    ]
  }
];