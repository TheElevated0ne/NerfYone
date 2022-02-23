import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneBasicAbilitiesComponent } from './yone-basic-abilities.component';

describe('YoneBasicAbilitiesComponent', () => {
  let component: YoneBasicAbilitiesComponent;
  let fixture: ComponentFixture<YoneBasicAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneBasicAbilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneBasicAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
