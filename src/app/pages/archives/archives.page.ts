import { Component, OnInit, inject } from '@angular/core';
import { List } from 'src/app/interfaces/List';
import { ListesService } from 'src/app/services/listes.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.page.html',
  styleUrls: ['./archives.page.scss'],
})
export class ArchivesPage implements OnInit {
  public lists!: List[];
  private listService: ListesService = inject(ListesService);

  constructor() { }

  ngOnInit() {
    this.lists = this.listService.getAll().filter((list) => list.completed === true);
  }

}
