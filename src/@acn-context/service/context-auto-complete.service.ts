import { Injectable } from '@angular/core';
import { Observable, of, startWith, switchMap } from 'rxjs';

import { AcnCompetitorResourceService } from '@acn-context/services/competitor.service';
import { AcnCompetitorDto } from '@acn-context/class/competitor-dto.class';

@Injectable({providedIn: 'root'})
export class AcnContextAutocompleteService {
	constructor(
		private competitorResourceService: AcnCompetitorResourceService,
	) { }

	filterCompetitor(observable: Observable<any>): Observable<AcnCompetitorDto[]> {
		return observable.pipe(
			startWith(() => ''),
			switchMap((value: string) => {
				let filter: any = {};
				if(value && value.length > 0)  {
					filter.descriptionContains = value;
				};
				return this.competitorResourceService.getAllCompetitorsUsingGET(filter);
		  })
	   );
	}

	displayCompetitor(selectedElement: any) {
		return selectedElement.description;
	}

}