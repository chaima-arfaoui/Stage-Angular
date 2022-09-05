import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router }from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';



declare interface RouteInfo {

path: string;

title: string;

icon: string;

class: string;

}
export const ROUTES: RouteInfo[]= [

  {path: '/reclamation', title: 'nouveau réclamation',icon: 'ni-tv-2 text-primary', class: '' },
  
  {path: '/mesreclamations', title: 'mes réclamations',icon:'ni-planet text-blue',class: '' },
  
  // {path: '/user-profile', title: 'User profile',icon:'ni-single-02 text-yellow',class: '' },
  
  // {path: '/login', title: 'Login',icon:'ni-key-25 text-info',class: '' },
  
  // {path: '/register', title: 'Register',icon:'ni-circle-08 text-pink',class: '' }
  
  ];

@Component({
  selector: 'app-side-bar',
  templateUrl: './barcomponent.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
public menuItems: any[];
public isCollapsed: true;
  constructor(private route: ActivatedRoute, private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(){

    this.menuItems= ROUTES.filter(menuItem=> menuItem);
    
    this.router.events.subscribe((event)=> {
    
    this.isCollapsed= true;
    
    });
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    }
    
    Offre(){
    
    this.router.navigate(['compte'],{relativeTo:this.route});
    
    }
    logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}


