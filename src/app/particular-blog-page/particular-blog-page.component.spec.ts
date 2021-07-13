import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularBlogPageComponent } from './particular-blog-page.component';

describe('ParticularBlogPageComponent', () => {
  let component: ParticularBlogPageComponent;
  let fixture: ComponentFixture<ParticularBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularBlogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
