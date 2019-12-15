import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentProviderComponent } from './tournament-provider.component';

describe('TournamentProviderComponent', () => {
  let component: TournamentProviderComponent;
  let fixture: ComponentFixture<TournamentProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
