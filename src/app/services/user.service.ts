import { Injectable } from '@angular/core';
import { SideBarSectionModel } from '../components/dashboard/models/sidebar-item.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  //#region Properties
  public sidebarData: SideBarSectionModel[] = sidebarItems;
  //#endregion

  //#region Main logic methods
  public getSidebarData(): Observable<SideBarSectionModel[]> {
    return of(this.sidebarData);
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
    sectionTitle: '',
    items: [
      {
        title: 'Pages',
        icon: 'domain',
        children: [
          {
            title: 'Profile',
            children: [
              { title: 'Profile Overview', link: '/profile/overview' },
              { title: 'Teams', link: '/profile/teams' },
              { title: 'All Projects', link: '//profile/all-projects' }
            ]
          },
          {
            title: 'Users',
            children: [
              { title: 'Reports', link: '/users/reports' },
              { title: 'New User', link: '/users/new-user' }
            ]
          },
          {
            title: 'Account',
            children: [
              { title: 'Settings', link: '/account/settings' },
              { title: 'Billing', link: '/account/billing' },
              { title: 'Invoice', link: '/account/invoice' },
              { title: 'Security', link: '/account/security' }
            ]
          },
          {
            title: 'Project',
            children: [
              { title: 'General', link: '/project/general' },
              { title: 'Timeline', link: '/project/timeline' },
              { title: 'New Project', link: '/project/new-project' }
            ]
          },
          { title: 'Pricing Page', link: '/pricing-page' },
          { title: 'Messages', link: '/message' },
          { title: 'Widgets', link: '/widgets' },
          { title: 'Charts', link: '/charts' },
          { title: 'Sweet Alerts', link: '/sweet-alerts' },
          { title: 'RTL', link: '//rtl' },
          { title: 'Notifications', link: '/notifications' }
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
    items: [
      {
        title: 'Authentication',
        icon: 'lock',
        children: [
          {
            title: 'Sign In',
            children: [
              { title: 'Basic', link: '/authentication/sign-in/basic' },
              { title: 'Cover', link: '/authentication/sign-in/cover' },
              { title: 'Illustration', link: '/authentication/sign-in/illustration' }
            ]
          },
          {
            title: 'Sign Up',
            children: [
              { title: 'Basic', link: '/authentication/sign-up/basic' },
              { title: 'Cover', link: '/authentication/sign-up/cover' },
              { title: 'Illustration', link: '/authentication/sign-up/illustration' }
            ]
          },
          {
            title: 'Reset Password',
            children: [
              { title: 'Basic', link: '/authentication/reset-password/basic' },
              { title: 'Cover', link: '/authentication/reset-password/cover' },
              { title: 'Illustration', link: '/authentication/reset-password/illustration' }
            ]
          },
          {
            title: 'Lock',
            children: [
              { title: 'Basic', link: '/authentication/lock/basic' },
              { title: 'Cover', link: '/authentication/lock/cover' },
              { title: 'Illustration', link: '/authentication/lock/illustration' }
            ]
          },
          {
            title: '2-Step Verification',
            children: [
              { title: 'Basic', link: '/authentication/2-step-verification/basic' },
              { title: 'Cover', link: '/authentication/2-step-verification/cover' },
              { title: 'Illustration', link: '/authentication/2-step-verification/illustration' }
            ]
          },
          {
            title: 'Error',
            children: [
              { title: 'Error 404', link: '/authentication/error/404' },
              { title: 'Error 500', link: '/authentication/error/500' }
            ]
          }
        ],
        isExpanded: false
      }
    ]
  },
  {
    sectionTitle: 'DOCS',
    items: [
      {
        title: 'Basic',
        icon: 'rocket_launch',
        children: [
          {
            title: 'Getting Started',
            children: [
              { title: 'Quick Start', link: '/basic/getting-started/quick-start' },
              { title: 'License', link: '/basic/getting-started/license' },
              { title: 'Contents', link: '/basic/getting-started/contents' },
              { title: 'Build Tools', link: '/basic/getting-started/build-tools' }
            ]
          },
          {
            title: 'Foundation',
            children: [
              { title: 'Colors', link: '/basic/foundation/colors' },
              { title: 'Grid', link: '/basic/foundation/grid' },
              { title: 'Typography', link: '/basic/foundation/typography' },
              { title: 'Icons', link: '/basic/foundation/icons' }
            ]
          }
        ],
        isExpanded: false
      }
    ]
  },
  {
    items: [
      {
        title: 'Components',
        icon: 'forum',
        children: [
          { title: 'Alerts', link: '/components/alerts' },
          { title: 'Badge', link: '/components/badge' },
          { title: 'Buttons', link: '/components/buttons' },
          { title: 'Card', link: '/components/card' },
          { title: 'Carousel', link: '/components/carousel' },
          { title: 'Collapse', link: '/components/collapse' },
          { title: 'Dropdowns', link: '/components/dropdowns' },
          { title: 'Forms', link: '/components/forms' },
          { title: 'Modal', link: '/components/modal' },
          { title: 'Navs', link: '/components/navs' },
          { title: 'Navbar', link: '/components/navbar' },
          { title: 'Pagination', link: '/components/pagination' },
          { title: 'Popovers', link: '/components/popovers' },
          { title: 'Progress', link: '/components/progress' },
          { title: 'Spinners', link: '/components/spinners' },
          { title: 'Tables', link: '/components/tables' },
          { title: 'Tooltips', link: '/components/tooltips' }
        ],
        isExpanded: false
      }
    ]
  },
  {
    items: [
      {
        title: 'Changelog',
        icon: 'credit_card',
        link: 'changelog'
      }
    ]
  }
];

