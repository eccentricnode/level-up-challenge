import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationsDetailsComponent } from './civilizations-details.component';

describe('CivilizationsDetailsComponent', () => {
  let component: CivilizationsDetailsComponent;
  let fixture: ComponentFixture<CivilizationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilizationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
