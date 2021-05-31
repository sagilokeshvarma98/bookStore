import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookDisplayComponent } from './pages/home/book-display/book-display.component';
import {HttpClientModule} from '@angular/common/http';
import { BookContentComponent } from './pages/home/book-content/book-content.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { BookCommentsComponent } from './pages/home/book-content/book-comments/book-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BookDisplayComponent,
    BookContentComponent,
    FilterPipe,
    DiscountPipe,
    BookCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
