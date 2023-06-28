import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'acn-competitor-display-column',
	templateUrl: './competitor-display-column.component.html',
	styleUrls: ['./competitor-display-column.component.scss']
})
export class AcnCompetitorDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}