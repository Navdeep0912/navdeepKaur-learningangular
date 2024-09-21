import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldListItemComponent } from './world-list-item.component';

describe('WorldListItemComponent', () => {
  let component: WorldListItemComponent;
  let fixture: ComponentFixture<WorldListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
