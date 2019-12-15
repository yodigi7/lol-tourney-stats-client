import { Component, OnInit, Input } from '@angular/core';
import { RiotService } from '../http-backend/riot.service';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.scss']
})
export class ApikeyComponent implements OnInit {

  constructor(public riotService: RiotService) { }

  ngOnInit() { }

}
