import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {DataService} from  './data.service';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
