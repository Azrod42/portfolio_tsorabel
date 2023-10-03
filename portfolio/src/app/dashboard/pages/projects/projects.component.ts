import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  category: number = 0;
  projects: any = [];
  selected: number = 0;
  selectedObj: any = {};
  @ViewChild('selectedRef', { static: false }) selectedRef!: ElementRef;
  swipe = new Audio('../../../../assets/sound/swoop.mp3')

  constructor(private projectService: ProjectsService,
              private renderer: Renderer2){
    this.onClick(1);
    this.swipe.load();
    this.swipe.volume = 1;
  }

  onSelect(id: number){
    if(id !== this.selected){
      this.renderer.removeClass(this.selectedRef.nativeElement, "blur-out")
      this.renderer.removeClass(this.selectedRef.nativeElement, "blur-in")
      this.renderer.addClass(this.selectedRef.nativeElement, "blur-out")
      this.swipe.play();
      setTimeout(() => {
        this.selected = id;
        this.selectedObj = this.projects[id];
      }, 940)
      setTimeout(() => {
        this.renderer.removeClass(this.selectedRef.nativeElement, "blur-out")
        this.renderer.addClass(this.selectedRef.nativeElement, "blur-in")
      },1200)
    }
  }

  async onClick(id: number){
    if (id > 0 && id < 3 && id != this.category){
      this.category = id;
      this.selected = 0;
      this.projects = await this.projectService.getProjects(id);
      this.selectedObj = this.projects[0];
    }
  }

}
