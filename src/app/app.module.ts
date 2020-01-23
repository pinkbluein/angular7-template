import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {LoginService} from './services/login.service';
import {LoginGuard} from './guards/login.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthLayoutComponent} from './layout/auth/auth-layout.component';
import {DataService} from './services/data.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        CoreModule,
        LayoutModule,
        SharedModule.forRoot(),
        RouterModule.forRoot(AppRoutes, {useHash : true}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
      LoginService,
      LoginGuard,
      AuthGuard,
      DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
