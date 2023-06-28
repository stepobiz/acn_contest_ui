import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { DialogService } from 'primeng/dynamicdialog';

import { StalEventerService, StalEvent } from "@stal/eventer";
import { StalPaginator } from '@stal/paginator';
//import { TabManagerService } from '@stal/carder';

import { AcnCompetitorResourceService } from '@acn-context';
import { EnzoCompetitorDialogComponent } from '../competitor-dialog/competitor-dialog.component';

@Component({
	templateUrl  : './competitor-list-page.component.html',
	styleUrls: ['./competitor-list-page.component.scss']
})
export class EnzoCompetitorListPageComponent {
	constructor(
		private router: Router,
		//public tabManagerService: TabManagerService,
		private resourceService: AcnCompetitorResourceService,
		private dialogService: DialogService,
		public eventer: StalEventerService,

	) { }

	createNewCompetitor() {
		this.dialogService.open(EnzoCompetitorDialogComponent, {
			header: 'Create competitor',
			width: '70%'
		});
	}

	competitorListPaginator: StalPaginator = {
		page: 0,
		size: 30
	};
	competitorCount: number;

	competitorListDc = ['_ck', 'id', 'username', 'telegram', 'group'];
	paginatorEvent(paginator: any) {
		let competitorListPaginator = { ...paginator }
		this.competitorListPaginator = competitorListPaginator;
	}

	exportButtons: any[] =  [
		{
			label: 'Pdf',
			icon: 'pi pi-file-pdf', command: () => {
				console.log("pdf");
			},
		},
		{
			label: 'Csv',
			icon: 'pi pi-file-excel', command: () => {
				console.log("csv");
			}
		}
	]

	tableButtons: any[] = [
		{
			label: "Dettagli",
			hideLabel: true,
			icon: "pi pi-search",
			severity: "secondary",
			class: "p-button-sm p-button-outlined",
			link: "../detail",
			//command: (e: any) => this.tabManagerService.openInTab(),
			childs: [
				{
					label: "Edit",
					icon: "pi pi-pencil",
					command: (e: any) => {
						const ref = this.dialogService.open(EnzoCompetitorDialogComponent, {
							data: { competitor: { ...e.item.data } },
							header: 'Update competitor',
							width: '70%'
						});
					}
				},
				{
					label: "Delete",
					icon: "pi pi-trash",
					command: async (e: any) => {
						await lastValueFrom(this.resourceService.deleteCompetitorUsingDELETE(e.item.data.id));
						this.eventer.launchReloadContent("competitor");
					}
				}
			]
		}
	]
}