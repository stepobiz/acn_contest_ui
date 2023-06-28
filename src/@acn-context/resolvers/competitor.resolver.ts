import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AcnCompetitorDto } from '../class/competitor-dto.class';
import { AcnCompetitorResourceService } from '../services/competitor.service';

@Injectable()
export class AcnCompetitorResolver implements Resolve<Observable<AcnCompetitorDto>> {
	constructor(private competitorResourceService: AcnCompetitorResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.competitorResourceService.getCompetitorUsingGET(+id);
	}
}