import {Component, Input} from '@angular/core';

@Component({
  selector: 'li-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() name?: string;
  @Input() description: string = "";
  @Input() url: string = "";
}
