import { Component } from '@angular/core';
import { Page } from './interfaces/Page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex: number = 0;
  public pages: Page[] = [
    {
      name: 'Listes',
      icon: 'list-outline',
      route: '/lists'
    },
    {
      name: 'Archives',
      icon: 'folder-outline',
      route: '/archives'
    },
    {
      name: 'Modèles',
      icon: 'document-outline',
      route: '/models'
    },
    {
      name: 'Réglages',
      icon: 'settings-outline',
      route: '/settings'
    },
  ]
  constructor() { }
}
