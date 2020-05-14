import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent as BaComponent } from './ba.component';

describe('BaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'beyoursoft-apps'`, () => {
    const fixture = TestBed.createComponent(BaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('beyoursoft-apps');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('beyoursoft-apps app is running!');
  });
});
