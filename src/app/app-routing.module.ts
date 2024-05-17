import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listes',
    pathMatch: 'full'
  },
  {
    path: 'archives',
    loadChildren: () => import('./pages/archives/archives.module').then(m => m.ArchivesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'listes',
    loadChildren: () => import('./pages/lists/lists.module').then(m => m.ListsPageModule)
  },
  {
    path: 'tasks/:id',
    loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksPageModule)
  },
  {
    path: 'models',
    loadChildren: () => import('./pages/models/models.module').then(m => m.ModelsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
