import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonaPage } from './persona';

@NgModule({
  declarations: [
    PersonaPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PersonaPage),
  ],
})
export class PersonaPageModule {}
