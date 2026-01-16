import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

// status: completato - incorso - annullato

export class ListComponent {
  tasks = [
    {
      id: '1',
      title: 'Obiettivo',
      description: 'Obiettivo da completare',
      status: 'incorso',
    },
  ]
}