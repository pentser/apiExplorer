import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
/*
  {
    path:'',
    component:AppComponent,
    pathMatch: 'full'
  }, */
  {
    path:"about",
    loadChildren:()=>import('./modules/about/about.module').then(m=>m.AboutModule)
  },

  {
    path:'explorer',
    loadChildren:()=>import("./modules/explorer/explorer.module").then(m=>m.ExplorerModule)
  },

  {
    path:'temp',
    loadChildren:()=>import("./modules/temp/temp.module").then(m=>m.TempModule)
  },


  {
    path:'**',
    redirectTo:''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'top',
    anchorScrolling:'enabled',
    initialNavigation:'enabled',
    relativeLinkResolution:'legacy'



  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
