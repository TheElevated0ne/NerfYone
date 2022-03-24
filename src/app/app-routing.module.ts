import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { ContentComponent } from './components/content/content.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WallComponent } from './components/wall/wall.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'wall' , component: WallComponent},
  {path: 'register-user', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
