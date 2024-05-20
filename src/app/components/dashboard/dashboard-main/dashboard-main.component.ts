import { Component } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item.model';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent {
  // TODO: organize after confirmation
  sidebarItems: SidebarItem[] = [
    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },
    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
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
    ,    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
    {
      title: 'Docs',
      icon: 'fa fa-book',
      children: [
        { title: 'Basic', link: '/docs/basic' },
        { title: 'Components', link: '/docs/components' },
        { title: 'Changelog', link: '/docs/changelog' }
      ],
      isExpanded: false
    },    {
      title: 'Dashboards',
      icon: 'fa fa-home',
      children: [
        { title: 'Default', link: '/dashboards/default' },
        { title: 'Automotive', link: '/dashboards/automotive' },
        { title: 'Smart Home', link: '/dashboards/smart-home' },
        {
          title: 'Virtual Reality', link: '/dashboards/virtual-reality',
          children: [
            { title: 'VR Default', link: '/dashboards/virtual-reality/vr-default' },
            { title: 'VR Info', link: '/dashboards/virtual-reality/vr-info' },
          ]
        },
        { title: 'CRM', link: '/dashboards/crm' }
      ],
      isExpanded: false
    },
    {
      title: 'Pages',
      icon: 'fa fa-file',
      children: [
        { title: 'Applications', link: '/pages/applications' },
        { title: 'Ecommerce', link: '/pages/ecommerce' },
        { title: 'Authentication', link: '/pages/authentication' }
      ],
      isExpanded: false
    },
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
  ];


  toggle(item: SidebarItem): void {
    item.isExpanded = !item.isExpanded;

    console.log('toggled');
  }
}
