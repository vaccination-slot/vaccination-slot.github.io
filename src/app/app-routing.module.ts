import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DistrictComponentComponent} from './components/main-component/district-component/district-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
