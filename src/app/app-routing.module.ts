import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './layout/base/layout-base.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutBaseComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'notfound',
			},
			//{ path: 'work', loadChildren: () => import('./modules/enzo-mbs-work/mbs-work.module').then(m => m.EnzoMbsWorkModule) },
		]
	},
	//    { path: 'notfound', component: NotfoundComponent },
	{ path: '**', redirectTo: '/notfound' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
