import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ExplorerComponent} from './components/explorer/explorer.component'


const routes:Routes=[
  {path:'',
  component:ExplorerComponent,
  pathMatch:'full'}
];





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExplorerRoutingModule { }
