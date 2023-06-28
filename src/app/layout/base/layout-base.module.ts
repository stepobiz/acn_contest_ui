import { NgModule } from '@angular/core';
import { LayoutBaseComponent } from './layout-base.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		
	],
	declarations: [
		LayoutBaseComponent,
	],
	providers: [],
	exports: [
		LayoutBaseComponent,
	],
})
export class LayoutBaseModule { }
