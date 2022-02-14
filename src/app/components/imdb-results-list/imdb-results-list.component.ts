import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, pluck, switchMap } from 'rxjs';
import { InfoDialogComponent } from '../../_modals/info-dialog/info-dialog.component';
import { ImdbAdvSearchResponce } from '../../interfaces/imdb-adv-search-responce';
import { ImdbAdvSearchResult } from '../../interfaces/imdb-adv-search-result';


@Component({
  selector: 'app-imdb-results-list',
  templateUrl: './imdb-results-list.component.html',
  styleUrls: ['./imdb-results-list.component.scss']
})
export class ImdbResultsListComponent implements OnInit {
  @Input()  data: Observable<ImdbAdvSearchResponce>;

  public results: Observable<ImdbAdvSearchResult[]>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
      this.results = this.data.pipe(
        pluck( 'results')
      )
  }

  public showInfo(result: ImdbAdvSearchResult) {
    this.dialog.open(InfoDialogComponent, {
      data: result,
      width: '800px',
      height: '600px'
    });
    console.log(result);
  }

}
