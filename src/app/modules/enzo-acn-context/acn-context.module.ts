import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AcnContextLibModule, ACN_CONTEXT_ENDPOINT } from '@acn-context';
import { EngeCommonAppModule } from '@enge/common-app';

import { enzoAcnContextRoutes } from './acn-context.route';

import { EnzoCompetitorListPageComponent } from './components/competitor/competitor-list-page/competitor-list-page.component';
import { EnzoCompetitorDetailPageComponent } from './components/competitor/competitor-detail-page/competitor-detail-page.component';
import { EnzoCompetitorDialogComponent } from './components/competitor/competitor-dialog/competitor-dialog.component';

@NgModule({
	imports: [ 
		RouterModule.forChild(enzoAcnContextRoutes),
		AcnContextLibModule,
		EngeCommonAppModule,

	],
	declarations: [
		EnzoCompetitorListPageComponent,
		EnzoCompetitorDetailPageComponent,
		EnzoCompetitorDialogComponent,
		
	],
	providers: [
		{
			provide: ACN_CONTEXT_ENDPOINT,
			useValue: 'http://localhost:3001/acn/context'
			//useValue: 'https://acn.stepo.biz/back_contest/acn/context'
		}
	]
})
export class EnzoAcnContextModule {}