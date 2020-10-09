import { DetailTaskComponent } from './detail-task/detail-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: DetailTaskComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
