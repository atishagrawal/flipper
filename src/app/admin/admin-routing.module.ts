import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../common/guards/auth-guard.service';

const routes: Routes = [

    {path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], data: {},
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
            },
            {
              path: 'dashboard',
              loadChildren: () => import('../../app/admin/dashboard/dashboard.module').then(m => m.DashbordModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'master',
              loadChildren: () => import('../../app/admin/master/master/master.module').then(m => m.MasterModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'stock',
              loadChildren: () => import('../../app/stock/stock.module').then(m => m.StockModule),
              canActivate: [AuthGuard]
            },
            {
              path: 'sales',
              loadChildren: () => import('../../app/sales/sales.module').then(m => m.SalesModule),
              canActivate: [AuthGuard]
            },
            {
              path: 'pos',
              loadChildren: () => import('../../app/pos/pos.module').then(m => m.PosModule),
              canActivate: [AuthGuard]
            },
            {
              path: 'setup',
              loadChildren: () => import('../../app/setup/setup.module').then(m => m.SetupModule),
              canActivate: [AuthGuard]
            },
            {
              path: 'settings',
              loadChildren: () => import('../../app/settings/settings.module').then(m => m.SettingsModule),
              canActivate: [AuthGuard]
            }

        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
