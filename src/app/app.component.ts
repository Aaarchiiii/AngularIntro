import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName='';
  title='Hello from BridgeLabz';
  logoUrl = 'https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG';  // Property holding the image URL
  bridgeLabzUrl = 'https://www.bridgelabz.com';  // BridgeLabz website URL
  onInputChange(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }
}
