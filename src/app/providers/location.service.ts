import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient }   from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable()
export class LocationService {
	items: Observable<any>;
	dbRef: any;

	constructor(private db: AngularFireDatabase) {
		this.dbRef = this.db.list('Gen_Map_Data');
		this.items = this.dbRef.valueChanges();
	}
	getLoc() {
		return this.items;
	}
}
