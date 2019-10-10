import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>New tag from ts file</h1>',
  styleUrls: ['./app.component.css']
  // styles: [`h1{
  //   color: red;
  // }`],
  // providers: []
})
export class AppComponent {
  title = 'First Angular project';
  link = 'https://www.google.com';
  nameLink = 'google';
  text: string;
  name: string;

  public addText(): void {
    this.text = 'Magic';
  }
}
