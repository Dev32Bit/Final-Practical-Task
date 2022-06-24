import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewInvoiceComponent } from './create-new-invoice/create-new-invoice.component';
import { ListingScreenComponent } from './listing-screen/listing-screen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listing' },
  { path: 'createNewInvoice', component: CreateNewInvoiceComponent },
  { path: 'listing', component: ListingScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
