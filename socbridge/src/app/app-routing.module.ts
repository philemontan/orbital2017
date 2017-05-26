import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent, pathMatch: 'full'}, {path: 'loggedIn/:id/:firstName/:lastName' , component: HeaderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})

export class AppRoutingModule {}
