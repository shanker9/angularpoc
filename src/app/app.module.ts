import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrategyComponent } from './strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
