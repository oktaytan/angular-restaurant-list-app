import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResutsComponent } from './search-resuts.component';

describe('SearchResutsComponent', () => {
  let component: SearchResutsComponent;
  let fixture: ComponentFixture<SearchResutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
