import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChempComponent } from './chemptrainig/chepm.component';
import { CompleteComponent } from './complete/complete.component'
import { CompleteNewComponent } from './completeNew/completeNew.component'
import { ChempTrainService } from './chemptrainig/chemp.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AmaterialModule } from './amaterial.module';

import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent, ChempComponent, CompleteComponent, CompleteNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AmaterialModule,
    HttpClientModule,

    FlexLayoutModule


  ],
  providers: [ChempTrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
