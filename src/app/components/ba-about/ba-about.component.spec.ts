import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaAboutComponent } from './ba-about.component';

describe('AboutComponent', () => {
  let component: BaAboutComponent;
  let fixture: ComponentFixture<BaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaAboutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
