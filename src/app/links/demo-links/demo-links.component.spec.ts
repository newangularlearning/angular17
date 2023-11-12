import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLinksComponent } from './demo-links.component';

describe('DemoLinksComponent', () => {
  let component: DemoLinksComponent;
  let fixture: ComponentFixture<DemoLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
