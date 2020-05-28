import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  register() {
    this.matIconRegistry.addSvgIcon(
      'linked_in',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../../assets/icons/${'linked-in.svg'}`
      )
    );
  }
}
