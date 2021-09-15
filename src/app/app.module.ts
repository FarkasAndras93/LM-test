import { AvsAnalysisModule } from './modules/avs-analysis/avs-analysis.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import {
  NgxsRouterPluginModule,
  RouterStateSerializer,
} from '@ngxs/router-plugin';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { LoginStoreService } from './modules/login/store/login-store.service';
import { CustomRouterStateSerializer } from './modules/utils/router-state-serializer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    PanelMenuModule,
    LoginModule,
    HomeModule,
    AvsAnalysisModule,
  ],
  providers: [
    LoginStoreService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
