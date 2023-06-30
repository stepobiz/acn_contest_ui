import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { lastValueFrom, Observable } from 'rxjs';

import { EngeCommonService, EngeEngeFormStep, EngeLibGenericForm, EngeValidator } from '@enge/common-lib';

import { AcnContextAutocompleteService } from '@acn-context/service/context-auto-complete.service';
import { AcnCompetitorResourceService } from '@acn-context/services/competitor.service';
import { AcnCompetitorDto } from '@acn-context/class/competitor-dto.class';

@Component({
	selector: 'acn-competitor-new-update-form',
	templateUrl: './competitor-new-update-form.component.html',
	styleUrls: ['./competitor-new-update-form.component.scss']
})
export class AcnCompetitorNewUpdateFormComponent extends EngeLibGenericForm {
	@Input() competitor: AcnCompetitorDto | undefined;
	@Output() competitorOutput: EventEmitter<AcnCompetitorDto> = new EventEmitter<AcnCompetitorDto>();
	

	constructor(
		ecs: EngeCommonService,
		private _formBuilder: FormBuilder,
		private competitorResourceService: AcnCompetitorResourceService, 
		protected acnContextAutocompleteService: AcnContextAutocompleteService,
	) { super(ecs); }

	override loadVariables(): void {
		if(this.competitor !== undefined) {
			this.input = this.competitor;
			{
			}
		}
		this.output = this.competitorOutput;
	}

	override loadForm(): void {
		this._newUpdateForm = this._formBuilder.group({
			id: [null],
			active: [false, [  ]],
			telegramId: [null, [  ]],
			telegramFirstName: [null, [  ]],
			telegramLastName: [null, [  ]],
			username: [null, [  ]],
			password: [null, [  ]],
			password2: [null, [  ]],
			idToken: [null, [  ]],
			accessToken: [null, [  ]],
			refreshToken: [null, [  ]],
			email: [null, [  ]],
			contextGroup: [null, [  ]],
			sQuizValutation: [null, [  ]],
		});

	}

	override prepareResult(): AcnCompetitorDto {
		let result: AcnCompetitorDto = this._newUpdateForm.value;
		{
			result.telegramId = (result.telegramId != null) ? +result.telegramId : null;
		}
		return result;
	}

	override async sendToBackEnd(request: AcnCompetitorDto) {
		console.log(request);
		try {
			let postOrPut: string;
			if (request.id != null && request.id > 0) {
				await lastValueFrom(this.competitorResourceService.updateCompetitorUsingPUT(request));
				postOrPut = "updated";
			} else {
				request.id = undefined;
				await lastValueFrom(this.competitorResourceService.createCompetitorUsingPOST(request));
				postOrPut = "created";
			}
			this._result = request;

			this.ecs.eventer.launchReloadContent("competitor");
			this.setStep(EngeEngeFormStep.COMPLETE);

		} catch (e: any) {
			this.ecs.eventer.launchMessage({
				severity: "error",
				text: e.error.message,
				duration: 5000
			});
			this.setStep(EngeEngeFormStep.FORM);
		}
	}

	protected newCompetitor() {
		//this._competitor = null;
		this.competitorOutput.emit(this.competitor);
		this.setStep(EngeEngeFormStep.FORM);
	}
}