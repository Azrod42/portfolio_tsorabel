import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm: FormGroup;
  sucess = new Audio("../../../../assets/sound/success.mp3");
  error = new Audio("../../../../assets/sound/error.mp3");


  constructor (private _fb: FormBuilder,
              private _projectService: ProjectsService,
              private _snackBar: MatSnackBar){
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    })
    this.sucess.load();
    this.sucess.volume = 0.5;
    this.error.load()
    this.error.volume = 1;
  }
  async onSubmit(){
    if (this.contactForm.valid) {
      await this._projectService.contact(this.contactForm.value?.name, this.contactForm.value?.email, this.contactForm.value?.message)
      this._snackBar.open("Email send. I will contact you back as soon as possible", "", {duration: 15000, verticalPosition: "bottom", horizontalPosition: 'center', panelClass: 'snack-bar-custom'})
      this.sucess.play();
      // Insérez votre code pour traiter les données du formulaire
    }else {
      this.error.play();
      this._snackBar.open("Inavalid input please check and try again", "", {duration: 5000, verticalPosition: "bottom", horizontalPosition: 'center', panelClass: 'snack-bar-custom'})
    }
  }

}
