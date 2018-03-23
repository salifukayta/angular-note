import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNoteComponent } from './ajouter-note.component';

describe('AjouterNoteComponent', () => {
  let component: AjouterNoteComponent;
  let fixture: ComponentFixture<AjouterNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
