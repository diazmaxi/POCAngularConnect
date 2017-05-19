import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule} from './routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '../components/appComponent/app.component'
import { Components } from '../components/components'
import { Routes } from '../routes/routes'

@NgModule({
  declarations: [
    ...Components,
    ...Routes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
