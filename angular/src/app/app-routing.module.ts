import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { AddComponent } from './Component/add/add.component';
import { GetallComponent } from './Component/getall/getall.component';
import { HomeComponent } from './Component/home/home.component';
import { GetbyidComponent } from './Component/getbyid/getbyid.component';
import { UpdateComponent } from './Component/update/update.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent,
  children:[
    {path: '', redirectTo:"/home/getall", pathMatch:'full'},
    {path: 'getall', component: GetallComponent},
    {path: 'adddata', component:AddComponent},
    {path: 'edit', component:UpdateComponent },
    {path: 'about', component:AboutComponent},
    {path: 'getbyid', component: GetbyidComponent}
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
