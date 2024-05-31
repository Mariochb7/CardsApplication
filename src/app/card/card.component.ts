import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // inform the component that it will receive
  // these different properties .
  
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';


}
