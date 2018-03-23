import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {
  // @Input() note: Note;
  @Output() ajoutNoteEvent = new EventEmitter();
  @Input() listNoteAffichage = new EventEmitter();
  // : declaration , = initialisation
  nouvelleNoteVar: Note = new Note();
  listNote: Note[] = [];

  ajouterNote() {
    // console.log('ajouterNote', this.nouvelleNoteVar.message);
    const nouvNote = {id: this.nouvelleNoteVar.id, message: this.nouvelleNoteVar.message};
    this.ajoutNoteEvent.emit(nouvNote);
    this.listNote.push(nouvNote);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
