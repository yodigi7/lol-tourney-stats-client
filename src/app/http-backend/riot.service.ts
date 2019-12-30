import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateTournamentBody, CreateTournamentCodesBody, CreateTournamentProviderBody, GetStatsBody } from './body-interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  public apikey;

  constructor(private http: HttpClient) { }

  generateError(message: string): Observable<any> {
    return of({ err: message });
  }

  createTournament(body: CreateTournamentBody): Observable<any> {
    if (!this.apikey) {
      return this.generateError('Apikey hasn\'t been set!');
    }
    body.apikey = this.apikey;
    console.log(body);
    return this.http.post(environment.baseUrl + 'tournament', body);
  }

  createTournamentCodes(body: CreateTournamentCodesBody): Observable<any> {
    if (!this.apikey) {
      return this.generateError('Apikey hasn\'t been set!');
    }
    if (!body.count) {
      return this.generateError('Count must be set!');
    }
    if (!body.mapType) {
      return this.generateError('Map type must be set!');
    }
    if (!body.pickType) {
      return this.generateError('Pick type must be set!');
    }
    if (!body.spectatorType) {
      return this.generateError('Specatator type must be set!');
    }
    if (!body.tournamentId) {
      return this.generateError('Tournament ID must be set!');
    }
    body.apikey = this.apikey;
    return this.http.post(environment.baseUrl + 'tournament-codes', body);
  }

  createTournamentProvider(body: CreateTournamentProviderBody): Observable<any> {
    if (!this.apikey) {
      return this.generateError('Apikey hasn\'t been set!');
    }
    if (!body.region) {
      return this.generateError('Region hasn\'t been set!');
    }
    if (!body.url) {
      return this.generateError('Callback URL hasn\'t been set!');
    }
    body.apikey = this.apikey;
    return this.http.post(environment.baseUrl + 'tournament-provider', body);
  }

  getStats(body: GetStatsBody): Observable<any> {
    if (!this.apikey) {
      return this.generateError('Apikey hasn\'t been set!');
    }
    if (!body.ids.length) {
      return this.generateError('No ids provided!');
    }
    body.apikey = this.apikey;
    return this.http.post(environment.baseUrl + 'get-stats', body);
  }
}
