import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @ViewChild('container', { static: false }) container!: ElementRef;
   constructor(private _renderer: Renderer2,
              private _router: Router){
  }

  onOpenRss(to: String){
    switch (to) {
      case "twitter":
        window.open("https://twitter.com/A_Azrod_FR", "_blank")
        break;
      case "github":
        window.open("https://github.com/Azrod42", "_blank")
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/tom-sorabella-26a336189/", "_blank")
        break;
      default:
        break;
    }
  }

  onEnter() {
    try {
      this._renderer.setStyle(this.container.nativeElement, "opacity", "1");
      const audio = new Audio("../../assets/sound/satellite-sound-effects.mp3");
      audio.load();
      audio.volume = 0.2;
      audio.play();
      this._renderer.removeClass(this.container.nativeElement, "anim-in");
      this._renderer.addClass(this.container.nativeElement, "anim-out");
      setTimeout(() => {
        this._router.navigate(['dashboard']);
      },600);
    } catch (e) {
      console.log(e);
      this._router.navigate(['dashboard']);
    }
  }
}
