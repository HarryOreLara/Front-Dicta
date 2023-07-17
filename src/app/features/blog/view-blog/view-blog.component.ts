import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit{

  constructor(private blogService:BlogService){}

  allBlog:any = [];

  ngOnInit(): void {
      this.readBlog();
  }

  readBlog(){
    this.blogService.getPoust().subscribe((res)=>{
      console.log(res.poust)
      this.allBlog = res.poust;
    })
  }

}
