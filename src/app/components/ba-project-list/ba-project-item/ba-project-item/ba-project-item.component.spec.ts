import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaProjectItemComponent } from './ba-project-item.component';

describe('BaProjectItemComponent', () => {
  let component: BaProjectItemComponent;
  let fixture: ComponentFixture<BaProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
