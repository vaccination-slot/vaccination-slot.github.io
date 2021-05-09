import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainComponentComponent } from './components/main-component/main-component.component';
import {FormsModule} from '@angular/forms';
import { StateComponentComponent } from './components/main-component/state-component/state-component.component';
import { DistrictComponentComponent } from './components/main-component/district-component/district-component.component';
import { SlotsComponent } from './components/main-component/slots/slots.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    StateComponentComponent,
    DistrictComponentComponent,
    SlotsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
