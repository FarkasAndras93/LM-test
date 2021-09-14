import { LoginModule } from './modules/login/login.module';
import { UserState } from './state/user.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [AppComponent],
    imports: [
        NgxsModule.forRoot([UserState]),
        // NgxsReduxDevtoolsPluginModule.forRoot(),
        // NgxsLoggerPluginModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
