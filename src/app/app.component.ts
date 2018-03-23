import {Component, OnInit} from '@angular/core';
import {Note} from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bloc note emna';
  // amalet list 5ater bech na5dem fiha fil ngfor lil ajout
  listNote: Note[] = [];

  // : declaration , = initialisation
   nouvelleNoteVar: Note = new Note();

  constructor() {
    // this.nouvelleNoteVar.id = 0 ;
    // this.nouvelleNoteVar.message = 'hi';
  }
   ajouterNoteComprParent(eventNote) {
    // const nouvNote = {id: this.nouvelleNoteVar.id, message: this.nouvelleNoteVar.message};
    this.listNote.push(eventNote);
  }
afficherNoteComprParent(listNoteAffich) {
    console.log("hiiiiiiiiiiii");
    this.listNote.push(listNoteAffich);

}

 /* modifierNote(note: Note): void {
    this.nouvelleNoteVar = note;
  }*/
  supprimerNote(note: Note) {
    // recherche de l'index de la note à supprimer

    const noteIndex = this.listNote.indexOf(note);

    this.listNote.splice(noteIndex, 1);// deletCount:1 pour supprimer un seul element


    // this.listNote.splice(noteIndex, 1);//deletCount:1 pour supprimer un seul element


    // splice() est une fonction sur les array qui permet de
    // supprimer les elements à partir du 1er paramètre
    // le nombre d'éléments à supprimer à définit grâce au 2eme paramètre
    //this.listNote.splice(noteIndex, 1);
  }

}
