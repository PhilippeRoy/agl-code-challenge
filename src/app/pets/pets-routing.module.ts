import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsPageComponent } from './components/containers/pets-page/pets-page.component';

const featureRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full',
  },
  {
    path: 'pets',
    component: PetsPageComponent,
  },
  {
    path: 'pets/:type',
    component: PetsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(featureRoutes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
