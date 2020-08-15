import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsPageComponent } from './components/containers/pets-page/pets-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';

@NgModule({
  imports: [CommonModule, PetsRoutingModule],
  declarations: [PetsPageComponent, PetsListComponent, MenuComponent],
})
export class PetsModule {}
