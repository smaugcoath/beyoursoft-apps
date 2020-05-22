import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaProjectListComponent } from './components/ba-project-list/ba-project-list.component';
import { BaProjectItemDetailsComponent } from './components/ba-project-list/ba-project-item-details/ba-project-item-details.component';

const routes: Routes = [
  { path: 'projects', component: BaProjectListComponent },
  { path: 'projects/:id', component: BaProjectItemDetailsComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BaRoutingModule {}
