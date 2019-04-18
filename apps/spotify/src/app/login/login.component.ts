import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'level-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accessToken: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.route.snapshot.fragment) {
      this.handleAccessToken();
    }
  }

  login() {
    const redirect = `${window.location.protocol}//${window.location.host}/login`;
    (<any>window).location = `https://accounts.spotify.com/authorize?client_id=c7cf8147eef149fd826485c0ec984251&response_type=token&redirect_uri=${redirect}`;
  }

  handleAccessToken() {
    this.accessToken = this.route.snapshot.fragment
      .split('access_token=')[1] 
      .split('&token')[0];
    localStorage.setItem('accessToken', this.accessToken);
    this.router.navigate(['/spotify'], { queryParams: {} });
  }
}
