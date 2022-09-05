import { Component, OnInit } from '@angular/core';

import { reclamation } from '../model/reclamation.model';
import { Router } from '@angular/router';
import { ReclamserviceService } from '../reclamservice.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mesreclamations',
  templateUrl: './mesreclamations.component.html',
  styleUrls: ['./mesreclamations.component.css'],
})
export class MesreclamationsComponent {
  //displayedColumns = ['id', 'country', 'email','message','name'];
  //dataSource : any ;
  reclam: any;
  id: any;
  Data: any;
  form: FormGroup;
  selectedDevice: any;

  constructor(
    private ReclamserviceService: ReclamserviceService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      country: [''],
    });
    this.id = this.tokenStorageService.getUser()['id'];
    this.ReclamserviceService.getReclamation(this.id).subscribe((data) => {
      this.Data = data;
      this.reclam = this.Data['reclamations'];
      console.log(this.Data['reclamations']);
    });
  }
  onChange(event) {
    console.log(this.selectedDevice);
    console.log(event);
      this.reclam = this.Data['reclamations'].filter((reclam)=>(reclam.country).toLowerCase()==event.toLowerCase());
    
    
}
}
