import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaProjectListComponent } from './ba-project-list.component';

describe('BaProjectListComponent', () => {
  let component: BaProjectListComponent;
  let fixture: ComponentFixture<BaProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
