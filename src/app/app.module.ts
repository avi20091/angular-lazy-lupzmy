import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { lazyRoutes } from './app.routes';
import { PageOneComponent } from './pageone.component';
import { IndexComponent } from './index.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  HttpClientModule, lazyRoutes ],
  declarations: [ AppComponent, HelloComponent, PageOneComponent, IndexComponent ],
  providers: [ CountriesService ],
  bootstrap:    [ IndexComponent ]
})
export class AppModule { }
