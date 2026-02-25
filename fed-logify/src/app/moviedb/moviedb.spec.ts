import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moviedb } from './moviedb';

describe('Moviedb', () => {
  let component: Moviedb;
  let fixture: ComponentFixture<Moviedb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moviedb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moviedb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
