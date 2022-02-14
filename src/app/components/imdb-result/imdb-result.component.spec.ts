import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbResultComponent } from './imdb-result.component';

describe('ImdbResultComponent', () => {
  let component: ImdbResultComponent;
  let fixture: ComponentFixture<ImdbResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
