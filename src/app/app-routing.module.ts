import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'client', component: CustomerComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/' } // Redirect any invalid paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
