import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  currentData?: any;
  currentIndex = -1;
  //title = '';

  page = 1;
  //pageSize = 3;
  //pageSizes = [3, 6, 9];
  count:number =0; // totalLength
  showData : any = [] ;

  constructor(private _service : DataService) { }

  ngOnInit(): void {
    this._service.getAllData().subscribe(result => {
      this.showData = result;
      console.log(this.showData);

      this.count = result.length;
    })
  }

  setActiveTutorial(data: any, index: number): void {
    this.currentData = data;
    this.currentIndex = index;
  }

}
