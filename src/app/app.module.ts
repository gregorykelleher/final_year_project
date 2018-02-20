import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }	from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { DomSanitizer} from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// environment
import { environment } from '../environments/environment';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

// Routing
import { AppRoutingModule }	from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';

// Services
import { AuthService } from './providers/auth.service';

// Must export the config
// export const firebaseConfig = {
//   apiKey: 'AIzaSyAAXwHtCbeZl0RmUYloYzDyo1p87UwJkig',
//   authDomain: 'finalyearprojectangular.firebaseapp.com',
//   databaseURL: 'https://finalyearprojectangular.firebaseio.com',
//   projectId: "finalyearprojectangular",
//   storageBucket: "",
//   messagingSenderId: "128876658513"
// };

@NgModule({
	declarations: [
	AppComponent,
	HomeComponent,
	LoginPageComponent
	],
	imports: [
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatMenuModule,
	MatTabsModule,
	BrowserAnimationsModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatInputModule,
	MatGridListModule,
	MatExpansionModule,
	BrowserModule,
	AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireAuthModule,
	AngularFireDatabaseModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyDlsj9CHvZ1bq9LdC9YOAQJ1qaYNDcUe04'
	})
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
