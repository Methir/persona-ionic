import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { NamePersonaComponent } from './persona/header/name-persona/name-persona';
import { NpPersonaComponent } from './persona/header/np-persona/np-persona';
import { PpPersonaComponent } from './persona/header/pp-persona/pp-persona';
import { AbilityPersonaComponent } from './persona/ability-persona/ability-persona';
import { FormDebugComponent } from './form-debug/form-debug';
import { InfoDebugComponent } from './info-debug/info-debug';
import { DamagePersonaComponent } from './persona/combat/damage-persona/damage-persona';
import { AttackPersonaComponent } from './persona/combat/attack-persona/attack-persona';
import { DefensePersonaComponent } from './persona/combat/defense-persona/defense-persona';
import { LifePersonaComponent } from './persona/combat/life-persona/life-persona';
import { HastePersonaComponent } from './persona/combat/haste-persona/haste-persona';


@NgModule({
	declarations: [
		NamePersonaComponent,
    	NpPersonaComponent,
    	PpPersonaComponent,
		AbilityPersonaComponent,
    	FormDebugComponent,
    	InfoDebugComponent,
    	DamagePersonaComponent,
   		AttackPersonaComponent,
    	DefensePersonaComponent,
    	LifePersonaComponent,
    	HastePersonaComponent
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
    	DamagePersonaComponent,
    	AttackPersonaComponent,
    	DefensePersonaComponent,
    	LifePersonaComponent,
    	HastePersonaComponent
	]
})
export class ComponentsModule {}
