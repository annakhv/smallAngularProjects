import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
   {path: '', redirectTo :'/home', pathMatch :'full'},
   {path: 'home', component: HomeComponent },
   {path: 'details/:id', component: DetailsComponent},
  {path: 'test', component: TestComponent},
  {path: "**", component: PageNotFoundComponent }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, DetailsComponent, TestComponent, PageNotFoundComponent]
