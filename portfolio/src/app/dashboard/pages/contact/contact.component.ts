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

  constructor (private _fb: FormBuilder,
              private _projectService: ProjectsService,
              private _snackBar: MatSnackBar){
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    })
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log("Données du formulaire : ", this.contactForm.value);
      this._projectService.contact(this.contactForm.value?.name, this.contactForm.value?.email, this.contactForm.value?.message)
      // Insérez votre code pour traiter les données du formulaire
    }else {
      this._snackBar.open("Inavalid input please check and try again", "", {duration: 5000, verticalPosition: "bottom", horizontalPosition: 'center', panelClass: 'snack-bar-custom'})
    }
  }

}
