import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroListComponent} from './heroes/hero-list.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {NotFountComponent} from './not-fount.component';

const routes: Routes = [
  {
    path: 'heroes', component: HeroListComponent
  },
  {
    path: 'crisis-center', component: CrisisCenterComponent
  },
  {
    path: '', redirectTo: '/heroes', pathMatch: 'full'
  },
  {
    path: '**', component: NotFountComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
