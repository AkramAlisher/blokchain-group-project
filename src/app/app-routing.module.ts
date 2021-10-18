import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CreateOfferComponent} from "./components/create-offer/create-offer.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'create-offer/:id', component: CreateOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
