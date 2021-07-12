import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularBlogComponent } from './particular-blog.component';

describe('ParticularBlogComponent', () => {
  let component: ParticularBlogComponent;
  let fixture: ComponentFixture<ParticularBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
