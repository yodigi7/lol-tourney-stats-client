import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCodesComponent } from './tournament-codes.component';

describe('TournamentCodesComponent', () => {
  let component: TournamentCodesComponent;
  let fixture: ComponentFixture<TournamentCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
