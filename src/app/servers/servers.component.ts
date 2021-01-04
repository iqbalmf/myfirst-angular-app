import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', //using component
  // selector: '[app-servers]', //using atribut
  // selector: '.app-server', //using like .css
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
