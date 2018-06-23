import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsDetailsComponent } from './comics-details.component';

describe('ComicsDetailsComponent', () => {
  let component: ComicsDetailsComponent;
  let fixture: ComponentFixture<ComicsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
