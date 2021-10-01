import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  {
    component: DirectoryComponent,
    path: '',
    pathMatch: 'full'
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class MainRoutingModule { }
