import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlantasModule } from './Plantas/Plantas.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
