import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit{

  constructor(private blogService:BlogService, private router:Router){}

  listPost:any = []

  ngOnInit(): void {
      this.readBlog();
  }

  readBlog(){
    this.blogService.getPoust().subscribe((res)=>{
      //console.log(res.poust);
      this.listPost = res.poust;
    })
  }

  verPoust(){
    this.router.navigate(['/nav/view-blog'])
  }
}
