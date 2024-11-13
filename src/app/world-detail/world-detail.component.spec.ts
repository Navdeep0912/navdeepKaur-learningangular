import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { worldDetailComponent } from './world-detail.component';

describe('WorldDetailComponent', () => {
  let component: worldDetailComponent;
  let fixture: ComponentFixture<worldDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [worldDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(worldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
