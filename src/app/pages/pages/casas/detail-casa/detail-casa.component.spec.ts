import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCasaComponent } from './detail-casa.component';

describe('DetailCasaComponent', () => {
  let component: DetailCasaComponent;
  let fixture: ComponentFixture<DetailCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
