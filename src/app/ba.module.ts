import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BaRoutingModule } from './ba-routing.module';
import { AppComponent as BaComponent } from './ba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularMaterialModule } from './angular-material.module';
import { CdkModule } from './cdk.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { BaProjectItemComponent } from './components/ba-project-list/ba-project-item/ba-project-item/ba-project-item.component';
import { BaProjectListComponent } from './components/ba-project-list/ba-project-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module';
import { BaProjectItemDetailsComponent } from './components/ba-project-list/ba-project-item-details/ba-project-item-details.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconRegistry } from '@angular/material/icon';
import { CustomIconService } from './services/custom-icon/custom-icon.service';
import { BaAboutComponent } from './components/ba-about/ba-about.component';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    BaComponent,
    BaProjectListComponent,
    BaProjectItemComponent,
    BaProjectItemDetailsComponent,
    BaAboutComponent,
  ],
  imports: [
    BaRoutingModule,
    SharedPipesModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [
    ApiService,
    CustomIconService,
    { provide: WebStorageService, useExisting: LOCAL_STORAGE },
  ],
  bootstrap: [BaComponent],
})
export class BaModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'linked-in',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linked-in.svg')
    );
  }
}

// AOT compilation support
export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
