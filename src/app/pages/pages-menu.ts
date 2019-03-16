import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    data: {
      permission: 'dashboard',
    },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Authorization',
    icon: 'nb-list',
    data: {
      permission: 'authorization',
    },
    children: [
      {
        title: 'SubMenu 1',
        children: [
          {
            title: 'SubMenu 1',
            link: '/pages/submenu/1',
          },
          {
            title: 'SubMenu 2',
            link: '/pages/submenu/2',
          },
          {
            title: 'SubMenu 3',
            link: '/pages/submenu/3',
          },
        ],
      },
      {
        title: 'SubMenu 2',
        link: '/pages/submenu/2',
      },
      {
        title: 'SubMenu 3',
        link: '/pages/submenu/3',
      },
    ],
  },
  {
    title: 'Customers',
    icon: 'nb-list',
    data: {
      permission: 'customers',
    },
    children: [
      {
        title: 'SubMenu 1',
        link: '/pages/submenu/1',
      },
      {
        title: 'SubMenu 2',
        link: '/pages/submenu/2',
      },
      {
        title: 'SubMenu 3',
        link: '/pages/submenu/3',
      },
    ],
  },
  {
    title: 'Products',
    icon: 'nb-list',
    data: {
      permission: 'products',
    },
    children: [
      {
        title: 'Home',
        link: '/pages/products/home',
        data: {
          permission: 'product.home',
        },
      },
      {
        title: 'SubMenu 2',
        link: '/pages/submenu/2',
      },
      {
        title: 'SubMenu 3',
        link: '/pages/submenu/3',
      },
    ],
  },
];
