import { Component, OnInit } from '@angular/core';
import { RiotService } from '../http-backend/riot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private riotService: RiotService) { }

  ngOnInit() {
  }

  updateApikey(event) {
    this.riotService.apikey = event.target.value;
  }
}
