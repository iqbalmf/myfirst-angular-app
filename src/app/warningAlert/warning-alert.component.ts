import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is warning, be carefull!</p>
  `,
  styles: [`
  p {
    padding: 20px;
    background-color: palevioletred;
    border: 1px solid red;
  }
  `]
})

export class WarningAlertComponent {

}
