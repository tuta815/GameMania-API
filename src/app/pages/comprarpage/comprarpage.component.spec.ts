import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarpageComponent } from './comprarpage.component';

describe('ComprarpageComponent', () => {
  let component: ComprarpageComponent;
  let fixture: ComponentFixture<ComprarpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
