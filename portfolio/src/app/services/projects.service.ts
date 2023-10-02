import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environements/environement';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _http: HttpClient) { }

  public async getProjects(id: number){
    try {
      return await firstValueFrom(this._http.get(environment.apiUrl + '/api/user/projects/' + id))
    } catch (error) {
      return error
    }
  }

}
