import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 10000);
  }

  getData() {
    this.data.getData().subscribe((res:any) => {
      this.posts = res.hits;
    })
  }

  showModal(data) {
    console.log(data);
  }
}
