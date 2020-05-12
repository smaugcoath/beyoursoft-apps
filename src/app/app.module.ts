import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularMaterialModule } from './angular-material.module';
import { CdkModule } from './cdk.module';
import { AppProjectComponent } from './components/app-project/app-project.component';
import { HttpClientModule } from '@angular/common/http';
import { MockApiService} from './services/api/mock-api.service';
import { ApiService } from './services/api/api.service';
import { AppProjectListComponent } from './components/app-project-list/app-project-list/app-project-list.component';

@NgModule({
  declarations: [AppComponent, AppProjectListComponent, AppProjectComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: ApiService, useClass: MockApiService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
