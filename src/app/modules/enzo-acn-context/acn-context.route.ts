import { Route } from '@angular/router';

import { AcnCompetitorResolver } from '@acn-context/resolvers/competitor.resolver';
import { EnzoCompetitorListPageComponent } from './components/competitor/competitor-list-page/competitor-list-page.component';
import { EnzoCompetitorDetailPageComponent } from './components/competitor/competitor-detail-page/competitor-detail-page.component';

export const enzoAcnContextRoutes: Route[] = [
	{
		path: '', 
		pathMatch : 'full',
		redirectTo: 'page'
	},
	{
		path: 'competitor',
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full',
			},
			{
				path: 'list', 
				component: EnzoCompetitorListPageComponent,
			},
			{
				path: 'detail/:id', 
				component: EnzoCompetitorDetailPageComponent,
				resolve: {
					competitor: AcnCompetitorResolver,
				},
			},
		]
	},
	
];