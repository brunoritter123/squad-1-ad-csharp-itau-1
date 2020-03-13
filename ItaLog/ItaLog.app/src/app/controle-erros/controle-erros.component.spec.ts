import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleErrosComponent } from './controle-erros.component';

describe('ControleErrosComponent', () => {
  let component: ControleErrosComponent;
  let fixture: ComponentFixture<ControleErrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleErrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
