import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { reclamation } from './model/reclamation.model';

@Injectable({
  providedIn: 'root'
})
export class ReclamserviceService {

  constructor(private http : HttpClient) { }

  AddReclamation(reclamation : any){
    return this.http.post(`${environment.baseurl}/api/reclamations/addreclamation`,reclamation)
  }
  updateReclamatiion ( reclamation : any){
    return this.http.put('${environment.baseurl}/api/reclamations/reclamation/{id}', reclamation)
  }
  getReclamation ( id : any)  {
    return this.http.get(`${environment.baseurl}/api/users/`+id)
  }
  deleteReclamation (reclamation: any ){
    return this.http.delete(`${environment.baseurl}/api/reclamations/reclamation/{id}`, reclamation)

  }
}
