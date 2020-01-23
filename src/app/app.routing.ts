import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthLayoutComponent} from './layout/auth/auth-layout.component';
import {LoginGuard} from './guards/login.guard';

export const AppRoutes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }],
    canActivate: [LoginGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'pages' }
];
