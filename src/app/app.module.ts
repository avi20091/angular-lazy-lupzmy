import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { lazyRoutes } from './app.routes';
import { PageOneComponent } from './pageone.component';
import { IndexComponent } from './index.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  HttpClientModule, lazyRoutes ],
  declarations: [  PageOneComponent, IndexComponent ],
  providers: [  ],
  bootstrap:    [ IndexComponent ]
})
export class AppModule { }
