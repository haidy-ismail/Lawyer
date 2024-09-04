import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/language.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any[]=[];
  lang: string;

  constructor(  public directionService: DirectionService,
    private articleServ: ArticlesService,
    public translate: TranslateService,
    private languageService: LanguageService
  ){
    this.lang =
      localStorage.getItem('language') || this.translate.getDefaultLang();
    this.languageService.switchLanguage(this.lang);
  }
  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleServ.getAllArticles().subscribe((res:any)=>{
      this.articles= res;
    })
  }

  changeLanguage(selectedLang: string) {
    localStorage.setItem('language', selectedLang); // Save the selected language to localStorage
    this.lang = selectedLang;
    this.languageService.switchLanguage(selectedLang);
    window.location.reload();
  }

  getDirectionClass() {
    return this.lang === 'ar' ? 'rtl-direction' : 'ltr-direction';
  }
}
