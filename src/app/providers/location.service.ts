import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient }   from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

// export interface Location {
//     name: string;
//     email: string;
//     phone: string;
//     company: {
//         name: string;
//     }
// }

export interface Location {
    lat: string;
}

@Injectable()
export class LocationService {
	items: Observable<any>;

	constructor(db: AngularFireDatabase) {
		this.items = db.list('/Location_Details', ref => ref.limitToFirst(10)).valueChanges();
	}
	getLoc() {
		return this.items;
	}
}

// export class LocationService {
	
// 	private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

// 	constructor(private http: HttpClient) { }

// 	getLoc(): Observable<Location[]> {
// 		return this.http.get<Location[]>(this.serviceUrl);
// 	}

// }