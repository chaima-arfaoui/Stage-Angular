import { FormattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReclamserviceService } from '../reclamservice.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  isLoggedIn: any ;
  form: FormGroup ;
  // = {
  //   name:null,
  //   email:null,
  //   country:null,
  //   message:null}
submitted = false;
  constructor(
    private fb: FormBuilder,
    private reclamationservices : ReclamserviceService, private router: Router, private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      country: [''],
      message : [''],
      category : [''],
}
    )
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login'])

    }
  }
  submit(){
    this.submitted = true;
    this.reclamationservices.AddReclamation(this.form.value).subscribe((res:any) =>{
      console.log(this.form.value)
      Swal.fire("reclamation Added!!")

    })
  }

}
