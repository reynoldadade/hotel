import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { MakeOrderComponent } from './make-order/make-order.component';
import { ManageStocksComponent } from './manage-stocks/manage-stocks.component';
import { OrderTablesComponent } from './order-tables/order-tables.component';
import { OrdersComponent } from './orders/orders.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'makeOrder' , component: MakeOrderComponent},
  {path: 'manageStocks' , component: ManageStocksComponent},
  {path: 'orders/:orderType', component: OrdersComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MakeOrderComponent,
    ManageStocksComponent,
    OrderTablesComponent,
    OrdersComponent
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
