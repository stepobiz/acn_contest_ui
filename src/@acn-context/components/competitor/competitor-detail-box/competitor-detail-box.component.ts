import { Component, Input, OnInit } from '@angular/core';
import { AcnCompetitorDto } from '../../../class/competitor-dto.class';

@Component({
	selector: 'acn-competitor-detail-box',
	templateUrl: './competitor-detail-box.component.html',
	styleUrls: ['./competitor-detail-box.component.scss']
})
export class AcnCompetitorDetailBoxComponent {

	@Input()
	competitor: AcnCompetitorDto;

	constructor( ) { }
}