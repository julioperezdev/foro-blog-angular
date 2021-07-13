import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParticularBlogPageComponent} from "./particular-blog-page/particular-blog-page.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'blog/:id',
    component:ParticularBlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
