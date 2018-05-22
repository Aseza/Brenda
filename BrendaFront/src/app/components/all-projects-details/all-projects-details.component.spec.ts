import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsDetailsComponent } from './all-projects-details.component';

describe('AllProjectsDetailsComponent', () => {
  let component: AllProjectsDetailsComponent;
  let fixture: ComponentFixture<AllProjectsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProjectsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
