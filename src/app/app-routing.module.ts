import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParticularBlogPageComponent} from "./particular-blog-page/particular-blog-page.component";
import {IndexComponent} from "./index/index.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {BlogGeneratorComponent} from "./blog-generator/blog-generator.component";

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:'generator',
    component:BlogGeneratorComponent
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
