import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
	selector: 'home-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title: string = 'Patient Watch';
	lat: number = 51.678418;
	lng: number = 7.809007;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['loginPage']);
	}
}