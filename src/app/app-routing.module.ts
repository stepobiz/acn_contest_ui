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
			{ path: 'acn', loadChildren: () => import('./modules/enzo-acn-context/acn-context.module').then(m => m.EnzoAcnContextModule) },
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
