import { Component, OnInit } from '@angular/core';
import { RiotService } from '../http-backend/riot.service';

@Component({
  selector: 'app-tournament-provider',
  templateUrl: './tournament-provider.component.html',
  styleUrls: ['./tournament-provider.component.scss']
})
export class TournamentProviderComponent implements OnInit {

  constructor(private riotService: RiotService) { }

  public url: string;
  public region: string;
  public error: string;
  public providerId: number;

  ngOnInit() { }

  getTournamentProvider() {
    let subscribable = this.riotService.createTournamentProvider({
      url: this.url,
      region: this.region
    })
    if (subscribable) {
      subscribable.subscribe((res: any) => {
        this.error = null; this.providerId = null;
        if (res.status) {
          this.error = res.status.message;
        } else {
          this.providerId = res.providerId;
        }
      });
    }
  }

}
