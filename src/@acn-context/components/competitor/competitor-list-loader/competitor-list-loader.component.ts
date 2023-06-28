import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { StalEvent } from "@stal/eventer";
import { EngeCommonService, EngeLibGenericTable } from '@enge/common-lib';

import { AcnCompetitorDto } from '../../../class/competitor-dto.class';
import { AcnCompetitorResourceService } from '../../../services/competitor.service';

@Component({
	selector: 'acn-competitor-list-loader',
	templateUrl: './competitor-list-loader.component.html',
	styleUrls: ['./competitor-list-loader.component.scss']
})
export class AcnCompetitorListLoaderComponent extends EngeLibGenericTable {
	constructor(
		private resourceService: AcnCompetitorResourceService,
		ecs: EngeCommonService,

	) { super(ecs); }

	protected override async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllCompetitorsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countCompetitorsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}

	protected override reloadFromEvent(event: StalEvent) {
		if(event.data === "competitor") this.loadData();
	}
}
