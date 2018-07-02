import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TruncateNumberPipe } from './../pipes/truncate-number.pipe';
import { NamePersonaComponent } from './persona/header/name-persona/name-persona';
import { NpPersonaComponent } from './persona/header/np-persona/np-persona';
import { PpPersonaComponent } from './persona/header/pp-persona/pp-persona';
import { AbilityPersonaComponent } from './persona/ability-persona/ability-persona';
import { FormDebugComponent } from './form-debug/form-debug';
import { InfoDebugComponent } from './info-debug/info-debug';
import { AttributePersonaComponent } from './persona/attribute/attribute-persona/attribute-persona';
import { CardPersonaComponent } from './persona/card-persona/card-persona';
import { DinamicListPersonaComponent } from './persona/attribute/dinamic-list-persona/dinamic-list-persona';
import { ModalPersonaComponent } from './persona/modal-persona/modal-persona';
import { ModalAttributeComponent } from './persona/attribute/modal-attribute/modal-attribute';
import { DinamicListPowerComponent } from './persona/power/dinamic-list-power/dinamic-list-power';
import { ModalPowerComponent } from './persona/power/modal-power/modal-power';
import { ModalPowerDetailsComponent } from './persona/power/modal-power-details/modal-power-details';

@NgModule({
	declarations: [
		NamePersonaComponent,
    	NpPersonaComponent,
    	PpPersonaComponent,
		AbilityPersonaComponent,
    	FormDebugComponent,
    	InfoDebugComponent,
		AttributePersonaComponent,
		TruncateNumberPipe,
    	CardPersonaComponent,
   		DinamicListPersonaComponent,
    	ModalPersonaComponent,
    	ModalAttributeComponent,
    	DinamicListPowerComponent,
    	ModalPowerComponent,
    	ModalPowerDetailsComponent,
	],
	imports: [
		IonicModule
	],
	exports: [
		NamePersonaComponent,
    	NpPersonaComponent,
    	PpPersonaComponent,
		AbilityPersonaComponent,
    	FormDebugComponent,
    	InfoDebugComponent,
		AttributePersonaComponent,
		TruncateNumberPipe,
    	CardPersonaComponent,
    	DinamicListPersonaComponent,
    	ModalPersonaComponent,
    	ModalAttributeComponent,
    	DinamicListPowerComponent,
    	ModalPowerComponent,
    	ModalPowerDetailsComponent,
	]
})
export class ComponentsModule { }
