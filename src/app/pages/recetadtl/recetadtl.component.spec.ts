import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetadtlComponent } from './recetadtl.component';

describe('RecetadtlComponent', () => {
  let component: RecetadtlComponent;
  let fixture: ComponentFixture<RecetadtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetadtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetadtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
