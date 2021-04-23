import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


const routes:Routes=[
  {
    path:"",
    component:AboutComponent
  }
];




@NgModule({
  declarations: [],

  imports: [RouterModule.forChild(routes)],
  
})
export class AboutRoutingModule { }

