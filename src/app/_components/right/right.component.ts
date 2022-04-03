import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  selectedImage = {
    Image: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_16795b053.jpeg",
    likes: 1024,
    timestamp: "2017-04-27 14:23:45"
  };
  likes = this.selectedImage.likes;
  constructor(
    private dataService: DataService

  ) { }

  selectedData = null;
  index= 0;

  ngOnInit(): void {
    this.dataService.getImage().subscribe(item => this.selectedImage = item);
    console.log(this.selectedImage);
    this.likes = this.selectedImage.likes;
    this.dataService.setLikes(this.selectedImage);
  }

  like = () =>{
    this.likes ++;
    this.selectedImage.likes = this.likes;
    this.dataService.setLikes(this.selectedImage);
  }
}
