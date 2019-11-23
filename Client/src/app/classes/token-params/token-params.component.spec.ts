import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenParamsComponent } from './token-params.component';

describe('TokenParamsComponent', () => {
  let component: TokenParamsComponent;
  let fixture: ComponentFixture<TokenParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
