import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TruncateNumberPipe } from './../pipes/truncate-number.pipe';
import { NamePersonaComponent } from './persona/header/name-persona/name-persona';
import { NpPersonaComponent } from './persona/header/np-persona/np-persona';
import { PpPersonaComponent } from './persona/header/pp-persona/pp-persona';
import { AbilityPersonaComponent } from './persona/ability-persona/ability-persona';
import { FormDebugComponent } from './form-debug/form-debug';
import { InfoDebugComponent } from './info-debug/info-debug';
import { AttributePersonaComponent } from './persona/attribute-persona/attribute-persona';
import { CardPersonaComponent } from './persona/card-persona/card-persona';


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
	]
})
export class ComponentsModule { }
