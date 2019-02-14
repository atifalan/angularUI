import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  arrPlayers: string [];

  ngOnInit() {
    this.httpService.get('./assets/players.json').subscribe(
      data => {
        this.arrPlayers = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
