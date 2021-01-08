import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { UsersListComponent } from './users-list/users-list.component';
import {FormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { FilterDataPipe } from './filter-data.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    UsersListComponent,
    FilterDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
