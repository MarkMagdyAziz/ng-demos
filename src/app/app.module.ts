import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeCounterComponent } from './like-counter/like-counter.component';
import { StoreModule } from '@ngrx/store';
import {CounterControlsComponent} from './ngrx-example1/counter-controls/counter-controls.component';
import {CounterOutputComponent} from './ngrx-example1/counter-output/counter-output.component';
import {counterReducer} from './ngrx-store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LikeCounterComponent,
  ],
  imports: [
    CounterOutputComponent, CounterControlsComponent,
    BrowserModule,
    StoreModule.forRoot({
      counter:counterReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
