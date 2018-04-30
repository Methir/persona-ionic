import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TruncateNumberPipe } from './../pipes/truncate-number.pipe';
import { NamePersonaComponent } from './persona/header/name-persona/name-persona';
import { NpPersonaComponent } from './persona/header/np-persona/np-persona';
import { PpPersonaComponent } from './persona/header/pp-persona/pp-persona';
import { AbilityPersonaComponent } from './persona/attribute/ability-persona/ability-persona';
import { FormDebugComponent } from './form-debug/form-debug';
import { InfoDebugComponent } from './info-debug/info-debug';
import { AttributePersonaComponent } from './persona/attribute/attribute-persona/attribute-persona';
import { CardPersonaComponent } from './persona/card-persona/card-persona';
import { AttributePopoverComponent } from './persona/attribute/attribute-popover/attribute-popover';
import { DinamicListPersonaComponent } from './persona/attribute/dinamic-list-persona/dinamic-list-persona';
import { ModalPersonaComponent } from './persona/modal-persona/modal-persona';


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
    	AttributePopoverComponent,
   		DinamicListPersonaComponent,
    	ModalPersonaComponent,
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
    	AttributePopoverComponent,
    	DinamicListPersonaComponent,
    	ModalPersonaComponent,
	]
})
export class ComponentsModule { }
