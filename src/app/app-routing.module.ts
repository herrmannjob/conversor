import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: '', redirectTo: '/step-one', pathMatch: 'full' },
  { path: '**', redirectTo: '/step-one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
