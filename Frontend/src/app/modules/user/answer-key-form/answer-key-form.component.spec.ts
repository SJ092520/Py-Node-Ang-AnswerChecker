import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerKeyFormComponent } from './answer-key-form.component';

describe('AnswerKeyFormComponent', () => {
  let component: AnswerKeyFormComponent;
  let fixture: ComponentFixture<AnswerKeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerKeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
