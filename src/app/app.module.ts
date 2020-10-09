import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule} from '@angular/forms';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { MesssagesComponent } from './messsages/messsages.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TaskSearchComponent } from './task-search/task-search.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DetailTaskComponent,
    MesssagesComponent,
    DashboardComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
