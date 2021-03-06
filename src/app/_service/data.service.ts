import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any = [
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1b956cd6.jpg",
      "likes": 540,
      "timestamp": "2017-04-12 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_2c611827.jpeg",
      "likes": 270,
      "timestamp": "2017-04-13 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_3d151734.jpg",
      "likes": 380,
      "timestamp": "2017-04-14 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_4dccf2bf.jpeg",
      "likes": 400,
      "timestamp": "2017-04-15 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_6ea7773c.jpeg",
      "likes": 752,
      "timestamp": "2017-04-16 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_7f2d4157.jpeg",
      "likes": 681,
      "timestamp": "2017-04-17 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg",
      "likes": 525,
      "timestamp": "2017-04-18 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_9041974b.jpeg",
      "likes": 728,
      "timestamp": "2017-04-19 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_100ccb04a.jpeg",
      "likes": 662,
      "timestamp": "2017-04-20 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_52923b48.jpeg",
      "likes": 279,
      "timestamp": "2017-04-21 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1131f79ff.jpeg",
      "likes": 347,
      "timestamp": "2017-04-22 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_123a00217.jpeg",
      "likes": 672,
      "timestamp": "2017-04-23 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1344b7582.jpeg",
      "likes": 260,
      "timestamp": "2017-04-24 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_144f684d4.jpeg",
      "likes": 881,
      "timestamp": "2017-04-25 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_155b9c1ee.jpeg",
      "likes": 993,
      "timestamp": "2017-04-26 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_16795b053.jpeg",
      "likes": 1024,
      "timestamp": "2017-04-27 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_17a21aad9.jpeg",
      "likes": 729,
      "timestamp": "2017-04-28 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1878832d3.jpeg",
      "likes": 140,
      "timestamp": "2017-04-29 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_1980e24ae.jpeg",
      "likes": 760,
      "timestamp": "2017-04-30 14:23:45"
    },
    {
      "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_20897a83a.jpeg",
      "likes": 669,
      "timestamp": "2017-05-01 14:23:45"
    }
  ];
  constructor() { }
  private selectedImage: BehaviorSubject<any> = new BehaviorSubject(null);
  private likes: BehaviorSubject<any> = new BehaviorSubject(null);

  getImage(): Observable<any> {
    // this.currentVersion = JSON.parse(localStorage.getItem('currentVersion'));
    return this.selectedImage.asObservable();
  }

  setImage(item: any) {
    console.log('Setting Updated Value');
    this.selectedImage.next(item);
  }

  getLikes(): Observable<any> {
    return this.likes.asObservable();
  }

  setLikes(item: any) {
    console.log('Setting Updated like Value');
    console.log(item);
    this.likes.next(item);
  }

}
