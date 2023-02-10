import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeStatsComponent } from './anime-stats.component';

describe('AnimeStatsComponent', () => {
  let component: AnimeStatsComponent;
  let fixture: ComponentFixture<AnimeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
