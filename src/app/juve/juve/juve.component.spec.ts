import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuveComponent } from './juve.component';

describe('JuveComponent', () => {
  let component: JuveComponent;
  let fixture: ComponentFixture<JuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
