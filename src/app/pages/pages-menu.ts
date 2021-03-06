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
        title: 'Roles',
        link: '/pages/authorization/roles',
        data: {
          permission: 'authorization.roles',
        },
      },
    ],
  },
  {
    title: 'Customers Manager',
    icon: 'nb-list',
    data: {
      permission: 'customers_manager',
    },
    children: [
      {
        title: 'Customers',
        link: '/pages/customers-manager/customers',
        data: {
          permission: 'customers_manager.customers',
        },
      },
      // {
      //   title: 'Customer Categories',
      //   link: '/pages/customers-manager/customer-categories',
      //   data: {
      //     permission: 'customers_manager.customer_categories',
      //   },
      // },
      {
        title: 'Admin Quota',
        link: '/pages/customers-manager/admin-quota',
        data: {
          permission: 'customers_manager.admin_quota',
        },
      },
    ],
  },
  {
    title: 'My Data',
    icon: 'nb-list',
    data: {
      permission: 'my_data',
    },
    children: [
      {
        title: 'Quota',
        link: '/pages/my-data/quota',
        data: {
          permission: 'my_data.quota',
        },
      },
      {
        title: 'Description Page',
        link: '/pages/my-data/description-page',
        data: {
          permission: 'my_data.description_page',
        },
      },
      {
        title: 'Request Quota',
        link: '/pages/my-data/request-quota',
        data: {
          permission: 'my_data.request_quota',
        },
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
    title: 'Sales Manager',
    icon: 'nb-list',
    data: {
      permission: 'sales_manager',
    },
    children: [
      {
        title: 'Sales',
        link: '/pages/sales-manager/sales',
        data: {
          permission: 'sales_manager.sales',
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
        queryParams: {
          type: 'service'
        }
      },
      {
        title: 'Products List',
        link: '/pages/store/products-list',
        data: {
          permission: 'store.products',
        },
        queryParams: {
          type: 'product'
        }
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
