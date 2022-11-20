import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { SellerModule } from './seller/seller.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,FormsModule, UserModule, SellerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
