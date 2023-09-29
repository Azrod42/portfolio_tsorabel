import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

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

}
