import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	private isLoggedIn: Boolean;
	private user_displayName: String;
	private user_email: String;
	user: Observable<firebase.User>;
	constructor(public authService: AuthService, private router: Router) {
		// this.user = authService.afAuth.authState;
		// console.log(this.user);

		this.authService.afAuth.authState.subscribe((auth) => {
			if (auth == null) {
				console.log("Logged out");
				this.isLoggedIn = false;
				this.user_displayName = '';
				this.user_email = '';
				this.router.navigate(['loginPage']);
			} else {
				this.isLoggedIn = true;
				this.user_displayName = auth.displayName;
				this.user_email = auth.email;
				console.log("Logged in");
				console.log(auth);
				this.router.navigate(['']);
			}
		});
	}
}
