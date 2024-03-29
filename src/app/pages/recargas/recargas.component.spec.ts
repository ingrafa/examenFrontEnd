import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargasComponent } from './recargas.component';

describe('RecargasComponent', () => {
  let component: RecargasComponent;
  let fixture: ComponentFixture<RecargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecargasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
