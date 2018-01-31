import { Component } from '@angular/core';

@Component({
	selector: 'home-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Map Test';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
