import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotDoc } from './chatbot-doc';

describe('ChatbotDoc', () => {
  let component: ChatbotDoc;
  let fixture: ComponentFixture<ChatbotDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
