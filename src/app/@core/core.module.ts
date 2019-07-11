import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { StoreModule } from '@ngrx/store';
import { Appreducers, metaReducers } from './store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { RoleProvider } from './utils/role.provider';

const socialLinks = [
  /* {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'socicon-twitter',
  }, */
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('admin');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: 'api',
        login: {
          endpoint: '/auth/login',
        },
        logout: {
          method: 'GET',
          redirect: { success: '/', failure: '/' },
          endpoint: '/auth/logout',
        },

      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: ['pages'],
      },
      Admin: {
        view: [
          'user',
          'dashboard',
          'pages',
          'authorization',
          'authorization.users',
          'authorization.roles',
          'customers_manager',
          'customers_manager.customers',
          'customers_manager.customer_categories',
          'customers_manager.admin_quota',
          'products_manager',
          'products_manager.products',
          'products_manager.taxonomies',
          'services_manager',
          'services_manager.services',
          'services_manager.taxonomies',
          
        ]
      },
      customer: {
        view: [
          'user',
          'dashboard',
          'pages',
          'my_data',
          'my_data.quota',
          'store',
          'store.services',
          'store.products',
          'store.shopping'
        ]
      },
      'Customer-A' : {parent: 'customer'},
      'Customer-B' : {parent: 'customer'},
      'Customer-C' : {parent: 'customer'},
      'Customer-D' : {parent: 'customer'},
      'Customer-E' : {parent: 'customer'},
      'Customer-F' : {parent: 'customer'},
      'Customer-G' : {parent: 'customer'},
      'Customer-H' : {parent: 'customer'},
      'Customer-I' : {parent: 'customer'}
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: RoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(Appreducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument({
        maxAge: 5,
      }) : [],
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
