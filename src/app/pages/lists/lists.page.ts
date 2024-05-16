import { Component, OnInit, inject } from '@angular/core';
import { List } from 'src/app/interfaces/List';
import { ListesService } from 'src/app/services/listes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  public lists!: List[];
  private listService: ListesService = inject(ListesService);

  constructor() { }

  ngOnInit() {
    this.lists = this.listService.getAll().filter((list) => !list.completed);
  }
}
