import { Component, OnInit } from '@angular/core';
import { RiotService } from '../http-backend/riot.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-get-stats',
  templateUrl: './get-stats.component.html',
  styleUrls: ['./get-stats.component.scss']
})
export class GetStatsComponent implements OnInit {

  retrievingMatchIds = false;
  retrievingTournamentCodes = false;
  stats: any;
  matchIdsText: string;
  tournamentCodesText: string;
  matchIds: Array<string>;
  tournamentCodes: Array<string>;
  constructor(private riotService: RiotService) { }

  ngOnInit() { }

  submitMatchIds() {
    this.retrievingMatchIds = true;
    this.riotService.getStats({
      ids: this.matchIds.map(matchId => {
        return { "matchId" : matchId };
      })
    }).subscribe(resp => {
      if (resp.status) {
        window.alert(`RIOT Error: ${resp.status.message}`);
      } else if (resp.err) {
        window.alert(resp.err);
      } else {
        this.stats = resp.stats;
        this.saveExcelFile();
      }
      this.retrievingMatchIds = false;
    });
  }

  sanitizeMatchIds() {
    this.matchIds = this.matchIdsText.split(",")
                                .flatMap(item => item.trim().split(" "))
                                .flatMap(item => item.trim().split("\n"))
                                .map(item => item.trim())
                                .filter(item => item !== "");
  }

  submitTournamentCodes() {
    this.retrievingTournamentCodes = true;
    this.riotService.getStats({
      ids: this.tournamentCodes.map(tournamentCode => {
        return { "tournamentCode" : tournamentCode };
      })
    }).subscribe(resp => {
      if (resp.status) {
        window.alert(`RIOT Error: ${resp.status.message}`);
      } else if (resp.err) {
        window.alert(resp.err);
      } else {
        this.stats = resp.stats;
        this.saveExcelFile();
      }
      this.retrievingTournamentCodes = false;
    })
  }

  sanitizeTournamentCodes() {
    this.tournamentCodes = this.tournamentCodesText.split(",")
                                .flatMap(item => item.trim().split(" "))
                                .flatMap(item => item.trim().split("\n"))
                                .map(item => item.trim())
                                .filter(item => item !== "");
  }

  saveExcelFile() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.stats);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, 'sample' + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  }
}
