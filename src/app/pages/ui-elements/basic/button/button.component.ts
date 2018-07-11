import { PostService } from './../../../../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private post: PostService) { }

  ngOnInit() {
  }

  enviar(){
     //this.post.post();
  }

}
