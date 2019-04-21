import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationsListComponent } from './civilizations-list.component';

describe('CivilizationsListComponent', () => {
  let component: CivilizationsListComponent;
  let fixture: ComponentFixture<CivilizationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilizationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
