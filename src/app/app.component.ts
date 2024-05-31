import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat Tree' ,
      imageUrl: 'assets/images/tree.jpeg',
      userName: 'natrue',
      content: 'I saw this neat tree today'
    },
    { 
      title: 'Snowy Mountain' ,
      imageUrl: 'assets/images/mountain.jpeg',
      userName: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    { 
      title: 'Mountain Biking' ,
      imageUrl: 'assets/images/biking.jpeg',
      userName: 'biking1223',
      content: 'I did some biking today'
    },
    { 
      title: 'Mountain Biking' ,
      imageUrl: 'assets/images/biking.jpeg',
      userName: 'biking1223',
      content: 'I did some biking today'
    }
  ]
}
