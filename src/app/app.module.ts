import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }	from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule }	from './app-routing.module';



@NgModule({
	declarations: [
	AppComponent,
	HomeComponent
	],
	imports: [
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatGridListModule,
	BrowserModule,
	AppRoutingModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyDlsj9CHvZ1bq9LdC9YOAQJ1qaYNDcUe04'
	})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
