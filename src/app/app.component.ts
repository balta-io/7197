import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(data => {
      if (data) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });

    this.afAuth.idToken.subscribe(token => console.log(token));
  }
}
