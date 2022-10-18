import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'signin', loadChildren: () => import('./modules/signin/signin.module').then(m => m.SigninModule)},
  {path: 'private-favorid-addresses', canActivate: [AuthGuard], loadChildren: () => import('./modules/private-favorid-addresses/private-favorid-addresses.module').then(m => m.PrivateFavoridAddressesModule)},
  {path: 'public-favorid-addresses', loadChildren: () => import('./modules/public-favorid-addresses/public-favorid-addresses.module').then(m => m.PublicFavoridAddressesModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
