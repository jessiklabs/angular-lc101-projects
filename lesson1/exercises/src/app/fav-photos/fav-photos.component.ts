import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://media3.giphy.com/media/3oKIPnAiaMCws8nOsE/200w.gif?cid=82a1493by9assikh9r93upipca13rfh05occxver6wzwd6kf&rid=200w.gif&ct=g';
  image2 = 'https://i0.wp.com/jessiklabs.com/wp-content/uploads/2022/01/Linecooks.jpg';
  image3 = 'https://i0.wp.com/jessiklabs.com/wp-content/uploads/2022/01/Soupkids.jpg';

  constructor() { }

  ngOnInit() {
  }

}