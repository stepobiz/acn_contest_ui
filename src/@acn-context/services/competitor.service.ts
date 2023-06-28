import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ACN_CONTEXT_ENDPOINT } from '../context.variables';
import { AcnCompetitorDto } from '../class/competitor-dto.class';

@Injectable()
export class AcnCompetitorResourceService {

	protected basePath = 'http://localhost:3000/acn/context';

	constructor(
		private http: HttpClient,
		@Optional() @Inject(ACN_CONTEXT_ENDPOINT) basePath: string,
		
	) {
		if (basePath) {
			this.basePath = basePath;
		}
	}

	createCompetitorUsingPOST(competitor: AcnCompetitorDto): Observable<AcnCompetitorDto> {
		return this.http.post<AcnCompetitorDto>(this.basePath + "/competitors/", competitor);
	}

	updateCompetitorUsingPUT(competitor: AcnCompetitorDto): Observable<AcnCompetitorDto> {
		return this.http.put<AcnCompetitorDto>(this.basePath + "/competitors/", competitor);
	}

	getAllCompetitorsUsingGET(filters: any): Observable<AcnCompetitorDto[]> {
		return this.http.get<AcnCompetitorDto[]>(this.basePath + "/competitors?" + this.prepareQueryParams(filters).toString());
	}
	
	countCompetitorsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>(this.basePath + "/competitors/count?" + this.prepareQueryParams(filters).toString());
	}

	getCompetitorUsingGET(id: number): Observable<AcnCompetitorDto> {
		return this.http.get<AcnCompetitorDto>(this.basePath + "/competitors/" + id);
	}

	deleteCompetitorUsingDELETE(id: number): Observable<AcnCompetitorDto> {
		return this.http.delete<AcnCompetitorDto>(this.basePath + "/competitors/" + id + "/delete");
	}

	private prepareQueryParams(filters: any) {
		let params = new URLSearchParams();
		for (let key in filters) {
			params.set(key, filters[key])
		}
		return params;
	}
}