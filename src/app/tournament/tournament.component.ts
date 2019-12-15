import { Component, OnInit } from '@angular/core';
import { RiotService } from '../http-backend/riot.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss', '../tournament-provider/tournament-provider.component.scss']
})
export class TournamentComponent implements OnInit {

  public providerId: number;
  public name: string;

  public error: string;
  public tournamentId: number;

  constructor(public riotService: RiotService) { }

  ngOnInit() { }

  getTournamentId() {
    if (this.validate()) {
      let subscribable = this.riotService.createTournament({
        providerId: this.providerId,
        name: this.name
      });
      if (subscribable) {
        subscribable.subscribe((res: any) => {
          this.error = null; this.tournamentId = null;
          if (res.status) {
            this.error = res.status.message;
          } else {
            this.tournamentId = res.tournamentId;
          }
        });
      }
    }
  }

  validate() {
    let problems = "";
    let didFail = false;
    if (!this.providerId) {
      problems += "Provider ID must be set!\n";
    }
    if (!this.name) {
      problems += "Name must be set!\n";
    }
    if (didFail) {
      window.alert(problems);
    }
    return !didFail;
  }

}
