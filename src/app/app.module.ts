import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBaseModule } from './layout/base/layout-base.module';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		HttpClientModule,

		AppRoutingModule,

		LayoutBaseModule,
		
	],
	declarations: [
		AppComponent,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
