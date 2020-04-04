import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaIndividualComponent } from './terapia-individual.component';

describe('TerapiaIndividualComponent', () => {
  let component: TerapiaIndividualComponent;
  let fixture: ComponentFixture<TerapiaIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
