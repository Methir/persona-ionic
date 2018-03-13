import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { NamePersonaComponent } from './persona/name-persona/name-persona';
import { NpPersonaComponent } from './persona/np-persona/np-persona';
import { PpPersonaComponent } from './persona/pp-persona/pp-persona';
import { AbilityPersonaComponent } from './persona/ability-persona/ability-persona';
import { FormDebugComponent } from './form-debug/form-debug';
import { InfoDebugComponent } from './info-debug/info-debug';


@NgModule({
	declarations: [
		NamePersonaComponent,
    	NpPersonaComponent,
    	PpPersonaComponent,
		AbilityPersonaComponent,
    	FormDebugComponent,
    	InfoDebugComponent
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
    	InfoDebugComponent
	]
})
export class ComponentsModule {}
