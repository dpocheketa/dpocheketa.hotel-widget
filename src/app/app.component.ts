import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotelData = [{
      images: ['assets/images/res.jpg', 'assets/images/r1.jpg'],
      info: 'Righteous indignation & like',
      address: 'Sed perspiciatis, Et harum quidem',
      phone: '+1285 968 685',
      weather: {
          title: 'Et harum quidem',
          icon: 'cloud',
          water: '15',
          temperature: '19'
      },
      socialInfo: {
          title: 'Nam libero voluptatem',
          img: 'assets/images/b1.jpg',
          followers: 324,
          following: 342
      },
      type: 'string'
  }];

}
