import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environements/environement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  name: String = "test";

  constructor(private _http: HttpClient){}

  async onClick(){
    try {
    let data: any = await firstValueFrom(this._http.get(environment.apiUrl + '/user/me'));
    console.log(data);
    if (data?.name)
      this.name = data?.name;
    }catch (e){
      console.log(e);
    }
  }
}
