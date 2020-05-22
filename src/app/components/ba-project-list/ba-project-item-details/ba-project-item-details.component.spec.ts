import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaProjectItemDetailsComponent } from './ba-project-item-details.component';

describe('BaProjectItemDetailsComponent', () => {
  let component: BaProjectItemDetailsComponent;
  let fixture: ComponentFixture<BaProjectItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaProjectItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaProjectItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
