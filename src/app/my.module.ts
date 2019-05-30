import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
export const appRoutes:Routes=[
  { path: '', component: CountriesComponent}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  HttpClientModule, CommonModule, RouterModule.forChild(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, CountriesComponent ],
  providers: [ CountriesService ],
  export: [ CountriesComponent ]
})
export class MyModule { };
