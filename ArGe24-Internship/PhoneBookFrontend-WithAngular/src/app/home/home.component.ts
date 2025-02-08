import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todayDate: any;
  panelOpenState = false;
 

  ngOnInit(): void {
    this.todayDate = new Date().toLocaleDateString();
  }
}
