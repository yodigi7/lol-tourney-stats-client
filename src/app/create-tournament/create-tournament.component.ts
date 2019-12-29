import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RiotService } from '../http-backend/riot.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  tournamentProvider: FormGroup;
  tournament: FormGroup;
  tournamentCodesGroup: FormGroup;
  providerId: number;
  tournamentId: number;
  tournamentCodes: Array<number>;

  constructor(
    private formBuilder: FormBuilder,
    public riotService: RiotService
  ) { }

  ngOnInit() {
    this.tournamentProvider = this.formBuilder.group({
      region: [''],
      callbackURL: [''],
      tournamentProvider: []
    });
    this.tournament = this.formBuilder.group({
      providerId: [],
      tournamentName: [''],
      tournamentId: []
    });
    this.tournamentCodesGroup = this.formBuilder.group({
      tournamentId: [],
      count: [],
      teamSize: [],
      mapType: [''],
      pickType: [''],
      spectatorType: [''],
      metadata: ['']
    });
  }

  sync() {
    console.log(this.tournament.controls.tournamentId.value);
    if (this.tournamentProvider.controls.tournamentProvider.value) {
      this.tournament.controls.providerId.setValue(this.tournamentProvider.controls.tournamentProvider.value);
    } else if (this.providerId) {
      this.tournament.controls.providerId.setValue(this.providerId);
    }
    if (this.tournament.controls.tournamentId.value) {
      this.tournamentCodesGroup.controls.tournamentId.setValue(this.tournament.controls.tournamentId.value);
    } else if (this.tournamentId) {
      this.tournamentCodesGroup.controls.tournamentId.setValue(this.tournamentId);
    }
  }

  getTournamentProvider() {
    this.riotService.createTournamentProvider({
      region: this.tournamentProvider.controls.region.value,
      url: this.tournamentProvider.controls.callbackURL.value
    }).subscribe(res => {
      if (res.err) {
        window.alert(res.err);
      } else if (res.status) {
        window.alert(`RIOT error: ${res.status.message}`);
      } else if (res.providerId) {
        this.providerId = res.providerId;
      }
    })
  }

  getTournamentId() {
    this.riotService.createTournament({
      name: this.tournament.controls.tournamentName.value,
      providerId: this.tournament.controls.providerId.value
    }).subscribe(res => {
      if (res.err) {
        window.alert(res.err);
      } else if (res.status) {
        window.alert(`RIOT error: ${res.status.message}`);
      } else if (res.tournamentId) {
        this.tournamentId = res.tournamentId;
      }
    });
  }

  getCodes() {
    this.riotService.createTournamentCodes({
      tournamentId: this.tournamentCodesGroup.controls.tournamentId.value,
      count: this.tournamentCodesGroup.controls.count.value,
      teamSize: this.tournamentCodesGroup.controls.teamSize.value,
      mapType: this.tournamentCodesGroup.controls.mapType.value,
      pickType: this.tournamentCodesGroup.controls.pickType.value,
      spectatorType: this.tournamentCodesGroup.controls.spectatorType.value,
      metadata: this.tournamentCodesGroup.controls.metadata.value
    }).subscribe(res => {
      if (res.err) {
        window.alert(res.err);
      } else if (res.status) {
        window.alert(`RIOT error: ${res.status.message}`);
      } else if (res.tournamentCodes) {
        this.tournamentCodes = res.tournamentCodes;
      }
    })
  }

}
