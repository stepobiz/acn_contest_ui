import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";

import { DialogService } from 'primeng/dynamicdialog';

import { StalEvent } from "@stal/eventer";
import { StalPaginator } from '@stal/paginator';
//import { TabManagerService } from '@stal/carder';

import { EngeAppCommonService, EngeAppGenericDetailPageComponent } from "@enge/common-app";

import { AcnCompetitorDto, AcnCompetitorResourceService} from '@acn-context';
import { EnzoCompetitorDialogComponent } from '../competitor-dialog/competitor-dialog.component';

@Component({
	selector: 'enzo-competitor-detail-page',
	templateUrl: './competitor-detail-page.component.html',
	styleUrls: ['./competitor-detail-page.component.scss']
})
export class EnzoCompetitorDetailPageComponent extends EngeAppGenericDetailPageComponent {
	constructor(
		eacs: EngeAppCommonService,
		route: ActivatedRoute,
		//public tabManagerService: TabManagerService,
		private dialogService: DialogService,
		private resourceService: AcnCompetitorResourceService,
	) { super(eacs, route); }

	competitorDto: AcnCompetitorDto;

	override onLoad() {
		this.competitorDto = this.route.snapshot.data['competitor'];
	}

	protected override reloadFromEvent(event: StalEvent) {
		if(event.data === "competitor") this.reloadPage();
	}

	override async reloadPage() {
		this.competitorDto = await lastValueFrom(this.resourceService.getCompetitorUsingGET(this.id));
	}

	editCompetitor(competitor: AcnCompetitorDto) {
		const ref = this.dialogService.open(EnzoCompetitorDialogComponent, {
			data: { competitor: competitor },
			header: 'Update competitor',
			width: '70%'
		});
	}

	async deleteCompetitor(competitor: AcnCompetitorDto) {
		if(competitor.id === undefined) return;
		await lastValueFrom(this.resourceService.deleteCompetitorUsingDELETE(competitor.id));
	}

}



