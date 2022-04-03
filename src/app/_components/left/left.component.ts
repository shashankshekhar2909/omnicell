import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  allData:any = {};
  constructor(
    private dataService: DataService
  ) { }
  selectedIndex= 0;
  selectedData = null;
  selectedImage:any = null;
  ngOnInit(): void {
    this.allData = this.dataService.data;
    this.dataService.getLikes().subscribe(item => this.selectedImage = item);
    console.log(this.selectedImage);
    // console.log(this.selectedImage.index);
    this.allData.sort((a:any,b:any)=> (a.likes < b.likes ? 1 : -1))
    console.log(this.allData);
    this.selectedData=this.allData[0];
    this.selectedIndex = 0;
    this.dataService.setImage(this.selectedData);
  }

  selectImage(item:any,index:number){
    console.log(item);
    item.index = index;
    this.selectedData = item;
    this.dataService.setImage(this.selectedData);
  }

}
