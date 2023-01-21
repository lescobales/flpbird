import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdComponent } from './bird/bird.component';
import { ObstacleComponent } from './obstacle/obstacle.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    ObstacleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
