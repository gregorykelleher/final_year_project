import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { LocationService } from '../providers/location.service';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import * as firebase from 'firebase/app';
declare var google: any;

// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// }

@Component({
	selector: 'home-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
	title: string = 'Patient Watch';

	// google maps
	map_lat: number = 53.3783647;
	map_long: number = -6.5869683;
	map_zoom: number = 16;

	markers : Observable<any[]>;
	marker_lat: number;
	marker_long: number;

	dataSource = new LocDataSource(this.locationService);
	displayedColumns = ['no', 'lat', 'long' ];

	private _isLoggedIn: Boolean;
	private _user_displayName: String;
	private _user_email: String;

	constructor(private locationService: LocationService, private authService: AuthService, private db: AngularFireDatabase, private router: Router) { 

		this.markers = db.list('Gen_Map_Data').valueChanges();

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