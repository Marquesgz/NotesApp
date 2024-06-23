import { Component } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
import { NotesListComponent } from '../app/notes-list/notes-list.component';
import { AddNoteComponent } from '../app/add-note/add-note.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    NotesListComponent,
    AddNoteComponent,
    RouterModule,
  ],
})
export class AppComponent {}
