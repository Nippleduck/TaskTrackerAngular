import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerPageComponent } from './performer-page.component';

describe('PerformerPageComponent', () => {
  let component: PerformerPageComponent;
  let fixture: ComponentFixture<PerformerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
