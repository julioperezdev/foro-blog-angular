import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { PublicBlogListComponent } from './public-blog-list/public-blog-list.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { FooterComponent } from './footer/footer.component';
import { ParticularBlogComponent } from './particular-blog/particular-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    PublicBlogListComponent,
    CategorySelectorComponent,
    FooterComponent,
    ParticularBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
