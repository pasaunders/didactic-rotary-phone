import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  difference : number
  constructor(private _dataService : DataService) { }

  ngOnInit() {
  }

  genDifference() {
    let alphaTotal : number = this._dataService.aNumbers.reduce((a, b) => a + b, 0);
    let betaTotal : number = this._dataService.bNumbers.reduce((a, b) => a + b, 0);
    this.difference = alphaTotal - betaTotal;
  }

}
