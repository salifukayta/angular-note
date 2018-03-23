import { Component, OnInit } from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  nouvelleNoteVar: Note = new Note();
  listNote: Note[] = [];
  constructor() { }
  modifierNote(note: Note): void {
    this.nouvelleNoteVar = note;
  }

  ngOnInit() {
  }

}
