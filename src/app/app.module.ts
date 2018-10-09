import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { MakeOrderComponent } from './make-order/make-order.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { CancelledOrdersComponent } from './cancelled-orders/cancelled-orders.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { ManageStocksComponent } from './manage-stocks/manage-stocks.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'makeOrder' , component: MakeOrderComponent},
  {path: 'pendingOrders' , component: PendingOrdersComponent},
  {path: 'cancelledOrders' , component: CancelledOrdersComponent},
  {path: 'completedOrders' , component: CompletedOrdersComponent},
  {path: 'manageStocks' , component: ManageStocksComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MakeOrderComponent,
    PendingOrdersComponent,
    CancelledOrdersComponent,
    CompletedOrdersComponent,
    ManageStocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
