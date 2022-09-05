import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeticketsComponent } from './listetickets.component';

describe('ListeticketsComponent', () => {
  let component: ListeticketsComponent;
  let fixture: ComponentFixture<ListeticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
