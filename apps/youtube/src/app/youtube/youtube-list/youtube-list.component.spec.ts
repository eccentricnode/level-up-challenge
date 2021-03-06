import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeListComponent } from './youtube-list.component';

describe('YoutubeListComponent', () => {
  let component: YoutubeListComponent;
  let fixture: ComponentFixture<YoutubeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
