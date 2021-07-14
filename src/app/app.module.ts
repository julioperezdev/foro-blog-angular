import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { PublicBlogListComponent } from './public-blog-list/public-blog-list.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { FooterComponent } from './footer/footer.component';
import { ParticularBlogComponent } from './particular-blog/particular-blog.component';
import { ParticularBlogPageComponent } from './particular-blog-page/particular-blog-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogGeneratorComponent } from './blog-generator/blog-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    PublicBlogListComponent,
    CategorySelectorComponent,
    FooterComponent,
    ParticularBlogComponent,
    ParticularBlogPageComponent,
    ContactsComponent,
    BlogGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
