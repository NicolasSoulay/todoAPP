import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { List } from 'src/app/interfaces/List';
import { Task } from 'src/app/interfaces/Task';
import { ListesService } from 'src/app/services/listes.service';
import { ScreenReader } from '@capacitor/screen-reader';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';


ScreenReader.addListener('stateChange', ({ value }) => {
  console.log(`Screen reader is now ${value ? 'on' : 'off'}`);
});


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public list?: List;
  public isScreenReaderEnabled?: boolean;
  private listService: ListesService = inject(ListesService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    async () => {
      const { value } = await ScreenReader.isEnabled();
      this.isScreenReaderEnabled = value;
    };
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.list = this.listService.getList(params.get('id'));
    });
  }

  async readLabel(label: string) {
    await ScreenReader.speak({ value: label });
  }

  async addImage(task: Task) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })

    console.log("url image = " + image.webPath)
    if (this.list?.tasks) {
      this.list.tasks = this.list.tasks.map((t: Task) => {
        if (task.id === t.id) {
          t.imageUrl = image.webPath;
        }
        return t
      });
    }

    this.imageAddToast(task);

  }
  async imageAddToast(task: Task) {
    const alert = await this.toastController.create({
      message: `L'image à bien été ajoutée à la tache ${task.label} `,
      position: 'top',
      duration: 3000,
    });

    await alert.present();
  }

}
