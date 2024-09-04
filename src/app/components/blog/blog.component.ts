import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  books:any[]=[];
  myBookForm:FormGroup;
  constructor(private bookService: BooksService,
    private fb:FormBuilder
  ){

    this.myBookForm=this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author:['',Validators.required],
      imageUrl:['',Validators.required]
  
    });
  }
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(){
    this.bookService.getAllBooks().subscribe((res:any)=>{
      this.books = res;
      console.log(res);
    })
  }
}
