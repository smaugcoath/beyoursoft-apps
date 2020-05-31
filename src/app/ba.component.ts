import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  StorageService,
  SESSION_STORAGE,
  StorageTranscoders,
} from 'ngx-webstorage-service';
import { throwError } from 'rxjs';

@Component({
  selector: 'ba-root',
  templateUrl: './ba.component.html',
  styleUrls: ['./ba.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private readonly LANGUAGE_KEY = 'language-code';
  private _selectedCountryCode: string;
  public get selectedCountryCode(): string {
    return this._selectedCountryCode;
  }
  public set selectedCountryCode(value: string) {
    if (!this.countryCodes.includes(value)) {
      throwError('Country code not valid.');
    }
    this._selectedCountryCode = value;
    this.storageService.set(
      this.LANGUAGE_KEY,
      value,
      StorageTranscoders.STRING
    );

    this.translateService.use(value);
  }
  countryCodes: string[] = ['en', 'es'];

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    @Inject(SESSION_STORAGE) private storageService: StorageService,
    private translateService: TranslateService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    const defaultLenguage = this.getDefaultLanguage();
    this.translateService.setDefaultLang(defaultLenguage);
    this.selectedCountryCode = defaultLenguage;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private getDefaultLanguage(): string {
    let result = this.storageService.get(
      this.LANGUAGE_KEY,
      StorageTranscoders.STRING
    );

    if (!result) {
      result = this.translateService.getBrowserLang();
    }

    return result;
  }
}
