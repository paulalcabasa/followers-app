import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('isActive') isLike = false;
  @Input('likesCount') likesCount = 0;

  onClick() {
    this.likesCount += this.isLike ? -1 : 1;
    this.isLike = !this.isLike;
  }

}
