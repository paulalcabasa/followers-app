import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})


export class FavoriteComponent {

  @Input('isFavorite') isSelected = false;
  @Output('change') click = new EventEmitter();




  toggleSelected() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue :  this.isSelected});
  }


}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
