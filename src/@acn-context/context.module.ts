import { NgModule } from '@angular/core';

import { EngeCommonLibModule } from '@enge/common-lib';

import { AcnContextAutocompleteService } from './service/context-auto-complete.service';

import { AcnCompetitorListLoaderComponent } from './components/competitor/competitor-list-loader/competitor-list-loader.component';
import { AcnCompetitorDetailBoxComponent } from './components/competitor/competitor-detail-box/competitor-detail-box.component';
import { AcnCompetitorDisplayColumnComponent } from './components/competitor/competitor-display-column/competitor-display-column.component';
import { AcnCompetitorNewUpdateFormComponent } from './components/competitor/competitor-new-update-form/competitor-new-update-form.component';
import { AcnCompetitorResourceService } from './services/competitor.service';
import { AcnCompetitorResolver } from './resolvers/competitor.resolver';


@NgModule({
	imports: [ 
		EngeCommonLibModule,
		
	],
	declarations: [
		AcnCompetitorListLoaderComponent,
		AcnCompetitorDetailBoxComponent,
		AcnCompetitorDisplayColumnComponent,
		AcnCompetitorNewUpdateFormComponent,
	],
	providers: [
		AcnContextAutocompleteService,
		AcnCompetitorResourceService,
		AcnCompetitorResolver,
		
	],
	exports: [
		AcnCompetitorListLoaderComponent,
		AcnCompetitorDetailBoxComponent,
		AcnCompetitorDisplayColumnComponent,
		AcnCompetitorNewUpdateFormComponent,
	],
})
export class AcnContextLibModule {}