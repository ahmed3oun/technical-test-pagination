import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _service : DataService,private router:Router) { }

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
    console.log(index);
    console.log(data);


    this.router.navigateByUrl("?id="+this.currentData.id).then(r=> console.log(r)
    );
    //console.log();

  }

}
