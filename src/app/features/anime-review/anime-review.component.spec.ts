import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeReviewComponent } from './anime-review.component';

describe('AnimeReviewComponent', () => {
  let component: AnimeReviewComponent;
  let fixture: ComponentFixture<AnimeReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
