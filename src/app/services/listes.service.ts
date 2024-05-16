import { Injectable } from '@angular/core';
import { List } from '../interfaces/List';

const MOCK_LISTS: List[] = [
  {
    id: '1',
    name: 'Courses',
    completed: false,
    tasks: [
      {
        id: '1',
        label: 'Légumes',
        completed: false,
      },
      {
        id: '2',
        label: 'Liquide vaisselle',
        completed: false,
      },
      {
        id: '3',
        label: 'Riz',
        completed: true,
      },
    ],
  },
  {
    id: '2',
    name: 'Tâches ménagères',
    completed: false,
    tasks: [
      {
        id: '4',
        label: 'Vaisselle',
        completed: false,
      },
      {
        id: '5',
        label: 'Vitres',
        completed: false,
      },
    ],
  },
  {
    id: '3',
    name: 'Divers',
    completed: true,
    tasks: [
      {
        id: '6',
        label: 'Faire à manger',
        completed: true,
      },
      {
        id: '7',
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

  public getAll(): List[] {
    return [...MOCK_LISTS];
  }

  public getList(id: string | null): List | undefined {
    return MOCK_LISTS.find((list) => list.id === id);
  }
}
