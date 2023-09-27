import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selected: number = 1;

  onSelect(id: number){
    if (id > 0 && id < 6 && id !== this.selected){
      this.selected = id;
      console.log(this.selected)
    }
  }

}
