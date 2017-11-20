import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.css']
})
export class CompanyFilterComponent implements OnInit {
  @Output() changeFilterClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeFilter(minRating: number, minComments: number): void {
    this.changeFilterClicked.emit({
      minRating: minRating, minComments: minComments
    });
  }

}
