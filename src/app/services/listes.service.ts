import { Injectable } from '@angular/core';
import { List } from '../interfaces/List';

const MOCK_LISTS: List[] = [
  {
    name: 'Courses',
    completed: false,
    tasks: [
      {
        label: 'Légumes',
        completed: false,
      },
      {
        label: 'Liquide vaisselle',
        completed: false,
      },
      {
        label: 'Riz',
        completed: true,
      },
    ],
  },
  {
    name: 'Tâches ménagères',
    completed: false,
    tasks: [
      {
        label: 'Vaisselle',
        completed: false,
      },
      {
        label: 'Vitres',
        completed: false,
      },
    ],
  },
  {
    name: 'Divers',
    completed: true,
    tasks: [
      {
        label: 'Faire à manger',
        completed: true,
      },
      {
        label: 'Renverser le capitalisme',
        completed: true,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class ListesService {

  constructor() { }

  public getAll() {
    return [...MOCK_LISTS];
  }
}
