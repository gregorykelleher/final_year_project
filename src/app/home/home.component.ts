import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { LocationService } from '../providers/location.service';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import * as firebase from 'firebase/app';
declare var google:any;

@Component({
	selector: 'home-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
	title: string = 'Patient Watch';

	lat: number = 51.678418;
	lng: number = 7.809007;

	dataSource = new LocDataSource(this.locationService);
	displayedColumns = ['lat', 'long'];

	private _isLoggedIn: Boolean;
	private _user_displayName: String;
	private _user_email: String;

	constructor(private locationService: LocationService, private authService: AuthService, private db: AngularFireDatabase, private router: Router) { 

		this.authService.afAuth.authState.subscribe((auth) => {
			if (auth == null) {
				console.log("Logged out");
				this._isLoggedIn = false;
				this._user_displayName = '';
				this._user_email = '';
				this.router.navigate(['loginPage']);
			} else {
				this._isLoggedIn = true;
				this._user_displayName = auth.displayName;
				this._user_email = auth.email;
				this.router.navigate(['']);
			}
		});

	}

	ngOnInit() {

	}

	logout() {
		this.authService.logout();
		this.router.navigate(['loginPage']);
	}
}

export class LocDataSource extends DataSource<any> {
	constructor(private locationService: LocationService) {
		super();
	}
	connect(): Observable<any[]> {
		return this.locationService.getLoc();
	}
	disconnect() {}
}