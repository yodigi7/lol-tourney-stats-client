import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { GetStatsComponent } from './get-stats/get-stats.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-tournament', component: CreateTournamentComponent },
  { path: 'get-stats', component: GetStatsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
