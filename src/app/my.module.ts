import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CountriesComponent ],
  providers: [ CountriesService ],
  export:    [ CountriesComponent ]
})
export class MyModule { }
