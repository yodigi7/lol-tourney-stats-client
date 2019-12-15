import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  public apikey;

  constructor(private http: HttpClient) { }

  createTournament(body) {
    if (!this.apikey) {
      window.alert("Apikey hasn't been set!");
      return;
    }
    body.apikey = this.apikey;
    console.log(body);
    return this.http.post(environment.baseUrl + 'tournament', body);
  }

  createTournamentCodes(body) {
    if (!this.apikey) {
      window.alert("Apikey hasn't been set!");
      return;
    }
    body.apikey = this.apikey;
    return this.http.post(environment.baseUrl + 'tournament-codes', body);
  }

  createTournamentProvider(body) {
    if (!this.apikey) {
      window.alert("Apikey hasn't been set!");
      return;
    }
    body.apikey = this.apikey;
    return this.http.post(environment.baseUrl + 'tournament-provider', body);
  }
}
