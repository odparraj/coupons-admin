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
        title: 'Users',
        link: '/pages/authorization/users',
        data: {
          permission: 'authorization.users',
        },
      },
      {
        title: 'Edit User',
        link: '/pages/authorization/edit-user',
        data: {
          permission: 'authorization.users',
        },
      },
      {
        title: 'Roles',
        link: '/pages/authorization/roles',
        data: {
          permission: 'authorization.roles',
        },
      },
      {
        title: 'Permissions',
        link: '/pages/authorization/permissions',
        data: {
          permission: 'authorization.permissions',
        },
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
  {
    title: 'Products Manager',
    icon: 'nb-list',
    data: {
      permission: 'products_manager',
    },
    children: [
      {
        title: 'Products',
        link: '/pages/products-manager/products',
        data: {
          permission: 'products_manager.products',
        },
        queryParams: {
          type: 'product'
        }
      },
      {
        title: 'Categories',
        link: '/pages/products-manager/taxonomies',
        data: {
          permission: 'products_manager.taxonomies',
        },
        queryParams: {
          type: 'product'
        }
      },
    ],
  },
  {
    title: 'Services Manager',
    icon: 'nb-list',
    data: {
      permission: 'services_manager',
    },
    children: [
      {
        title: 'Services',
        link: '/pages/services-manager/services',
        data: {
          permission: 'services_manager.services',
        },
        queryParams: {
          type: 'service'
        }
      },
      {
        title: 'Categories',
        link: '/pages/services-manager/taxonomies',
        data: {
          permission: 'services_manager.taxonomies',
        },
        queryParams: {
          type: 'service'
        }
      },
    ],
  },
  {
    title: 'Store',
    icon: 'nb-list',
    data: {
      permission: 'store',
    },
    children: [
      {
        title: 'Services List',
        link: '/pages/store/services-list',
        data: {
          permission: 'store.services',
        },
      },
      {
        title: 'Products List',
        link: '/pages/store/products-list',
        data: {
          permission: 'store.products',
        },
      },
      {
        title: 'Shopping Cart',
        link: '/pages/store/shopping-cart',
        data: {
          permission: 'store.shopping',
        },
      },
    ],
  },
];
