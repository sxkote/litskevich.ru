import {Component, Input} from '@angular/core';

@Component({
  selector: 'li-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() name?: string;
  @Input() description: string = "";
  @Input() url: string = "";
}
