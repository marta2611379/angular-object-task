import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
