import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComprehendComponent } from './project-comprehend.component';

describe('ProjectComprehendComponent', () => {
  let component: ProjectComprehendComponent;
  let fixture: ComponentFixture<ProjectComprehendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComprehendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComprehendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
