import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messsages',
  templateUrl: './messsages.component.html',
  styleUrls: ['./messsages.component.scss']
})
export class MesssagesComponent implements OnInit {

  constructor(public MessageService: MessageService) { }

  ngOnInit() {
  }

}
