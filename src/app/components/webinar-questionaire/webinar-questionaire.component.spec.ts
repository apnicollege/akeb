import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarQuestionaireComponent } from './webinar-questionaire.component';

describe('WebinarQuestionaireComponent', () => {
  let component: WebinarQuestionaireComponent;
  let fixture: ComponentFixture<WebinarQuestionaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarQuestionaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
