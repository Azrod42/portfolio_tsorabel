import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('contentRef', { static: false }) contentRef!: ElementRef;
  selected: number = 1;
  swipe = new Audio('../../assets/sound/swipe.mp3')

  constructor(private _renderer: Renderer2)
  {
    this.swipe.load();
    this.swipe.volume = 0.8;
  }


  onSelect(id: number){
    if (id > 0 && id < 6 && id !== this.selected){
      this._renderer.addClass(this.contentRef.nativeElement, "flip-reverse")
      this.swipe.play();
      setTimeout(()=> {
        this._renderer.removeClass(this.contentRef.nativeElement, "flip-reverse")
        this.selected = id;
      }, 500)
    }
  }

}
