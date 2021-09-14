import { LoginStoreService } from './modules/login/store/login-store.service';
import { LoginModule } from './modules/login/login.module';
import { UserState } from './state/user.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    NgxsModule.forRoot([UserState]),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
  ],
  providers: [LoginStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
