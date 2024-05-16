import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { List } from 'src/app/interfaces/List';
import { ListesService } from 'src/app/services/listes.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public list?: List;
  private listService: ListesService = inject(ListesService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.list = this.listService.getList(params.get('id'));
    });
  }

}
