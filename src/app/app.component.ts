import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lawyer';
  lang: any;


  constructor(private translate: TranslateService, private router: Router) {
    if ('language' in localStorage) {
      this.lang = localStorage.getItem('language');
      translate.use(this.lang);
    } else {
      translate.use(this.lang);
    }
  }

}
