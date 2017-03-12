import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewwallet',
  templateUrl: './viewwallet.component.html',
  styleUrls: ['./viewwallet.component.css']
})
export class ViewwalletComponent implements OnInit {
user:Object;

  constructor(private authService: AuthService,
  private router: Router) { }

  ngOnInit() {
  this.authService.getProfile().subscribe(profile=>{
  this.user = profile.user;
  },
  err => {
  console.log(err);
  return false;
  });
  }

}