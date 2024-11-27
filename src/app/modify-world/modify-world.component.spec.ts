import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWorldComponent } from './modify-world.component';

describe('ModifyWorldComponent', () => {
  let component: ModifyWorldComponent;
  let fixture: ComponentFixture<ModifyWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
