import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChempComponent } from './chemptrainig/chepm.component'
import { CompleteComponent } from './complete/complete.component'
import { CompleteNewComponent } from './completeNew/completeNew.component'

const routes: Routes = [
  { path: '', component: ChempComponent},
  { path: 'complete', component: CompleteComponent},
  { path: 'completeNew', component: CompleteNewComponent},
  { path: '**', component: CompleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //declarations: [ChempComponent, CompleteComponent, CompleteNewComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
