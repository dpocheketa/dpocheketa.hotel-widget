import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @Input() hotelsList: any[];
  constructor() { }

  ngOnInit() {
  }

}
