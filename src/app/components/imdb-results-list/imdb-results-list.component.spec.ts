import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbResultsListComponent } from './imdb-results-list.component';

describe('ImdbResultsListComponent', () => {
  let component: ImdbResultsListComponent;
  let fixture: ComponentFixture<ImdbResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbResultsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
