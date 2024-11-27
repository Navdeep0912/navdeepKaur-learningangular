import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWorldListComponent } from './modify-world-list.component';

describe('ModifyWorldListComponent', () => {
  let component: ModifyWorldListComponent;
  let fixture: ComponentFixture<ModifyWorldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyWorldListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWorldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
