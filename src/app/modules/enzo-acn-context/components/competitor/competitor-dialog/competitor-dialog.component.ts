import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
	selector: 'competitor-dialog',
	templateUrl: 'competitor-dialog.component.html'
})

export class EnzoCompetitorDialogComponent {
	protected data: any = { };

	constructor(
		public ref: DynamicDialogRef,
		public config: DynamicDialogConfig
	) {
		if(this.config.data !== undefined) {
			this.data = this.config.data;
		}
	}

}