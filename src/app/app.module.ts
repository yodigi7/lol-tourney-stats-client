import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApikeyComponent } from './apikey/apikey.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { TournamentProviderComponent } from './tournament-provider/tournament-provider.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCodesComponent } from './tournament-codes/tournament-codes.component';

@NgModule({
  declarations: [
    AppComponent,
    ApikeyComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    TournamentProviderComponent,
    TournamentComponent,
    TournamentCodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
