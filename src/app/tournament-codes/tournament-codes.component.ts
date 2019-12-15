import { Component, OnInit } from '@angular/core';
import { RiotService } from '../http-backend/riot.service';

@Component({
  selector: 'app-tournament-codes',
  templateUrl: './tournament-codes.component.html',
  styleUrls: ['./tournament-codes.component.scss', '../tournament-provider/tournament-provider.component.scss']
})
export class TournamentCodesComponent implements OnInit {

  public count;
  public tournamentId;
  public mapType;
  public metadata;
  public pickType;
  public spectatorType;
  public teamSize;

  public error;
  public tournamentCodes;

  constructor(private riotService: RiotService) { }

  ngOnInit() { }

  getTournamentCodes() {
    if (this.validate()) {
      let subscribable = this.riotService.createTournamentCodes({
        spectatorType: this.spectatorType,
        teamSize: this.teamSize,
        pickType: this.pickType,
        mapType: this.mapType,
        metadata: this.metadata,
        count: this.count,
        tournamentId: this.tournamentId
      })
      if (subscribable) {
        subscribable.subscribe((res: any) => {
          this.error = null; this.tournamentCodes = null;
          if (res.status) {
            this.error = res.status.message;
          } else {
            this.tournamentCodes = res.tournamentCodes;
          }
        })
      }
    }
  }

  validate() {
    let problems = "";
    let didFail = false;
    if (this.teamSize < 1 || this.teamSize > 5) {
      problems += "Team Size must be between 1 and 5";
      didFail = true;
    }
    if (didFail) {
      window.alert(problems);
    }
    return !didFail;
  }
}
