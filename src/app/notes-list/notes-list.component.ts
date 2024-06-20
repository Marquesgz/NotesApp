import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NOTES } from '../notes';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  imports: [CommonModule] // Include CommonModule in the imports array
})
export class NotesListComponent {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
