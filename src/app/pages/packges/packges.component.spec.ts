import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackgesComponent } from './packges.component';

describe('PackgesComponent', () => {
  let component: PackgesComponent;
  let fixture: ComponentFixture<PackgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
