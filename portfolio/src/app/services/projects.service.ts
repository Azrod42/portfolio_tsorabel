import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + "212121", // Assurez-vous d'inclure votre jeton d'authentification si nécessaire
  });

  constructor(private _http: HttpClient) { }

  public async getProjects(id: number){
    try {
      return await firstValueFrom(this._http.get(environment.apiUrl + '/api/user/projects/' + id))
    } catch (error) {
      return error
    }
  }
  public async contact(name: string, email: string, content: string){
    try {
      return await firstValueFrom(this._http.post(environment.apiUrl + '/api/user/contact', {name, email, content}, {headers: this.headers}))
    } catch (error) {
      return error
    }
  }

}
