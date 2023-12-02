import {Component} from '@angular/core';

@Component({
  selector: 'app-like-counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.scss']
})
export class LikeCounterComponent {
  likes = 100
  inital = true
  handleLikes () {
    this.inital = !this.inital
    this.inital ? this.likes-- : this.likes++
  }
}
