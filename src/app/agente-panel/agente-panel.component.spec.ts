import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentePanelComponent } from './agente-panel.component';

describe('AgentePanelComponent', () => {
  let component: AgentePanelComponent;
  let fixture: ComponentFixture<AgentePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
