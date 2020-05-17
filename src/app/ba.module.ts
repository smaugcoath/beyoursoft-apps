import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaRoutingModule } from './ba-routing.module';
import { AppComponent as BaComponent } from './ba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularMaterialModule } from './angular-material.module';
import { CdkModule } from './cdk.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { BaProjectItemComponent } from './components/ba-project-list/ba-project-item/ba-project-item/ba-project-item.component';
import { BaProjectListComponent } from './components/ba-project-list/ba-project-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockApiService } from './services/api/mock-api.service';

@NgModule({
  declarations: [BaComponent, BaProjectListComponent, BaProjectItemComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaRoutingModule,
    BrowserAnimationsModule,
    CdkModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: ApiService, useClass: MockApiService }],
  bootstrap: [BaComponent],
})
export class BaModule {}
