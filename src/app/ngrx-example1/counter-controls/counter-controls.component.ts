import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterService} from 'src/app/counter.service';
import {decrement, increment} from 'src/app/ngrx-store/counter.actions';
// import {DecrementAction,IncrementAction} from 'src/app/ngrx-store/counter.actions';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor (private counterService: CounterService,private store: Store) { }

  increment () {
    // this.counterService.increment();

    // this.store.dispatch(new IncrementAction(2))
    this.store.dispatch(increment({value:2}))
  }

  decrement () {
    // this.counterService.decrement();

    // this.store.dispatch(new DecrementAction(2))
    this.store.dispatch(decrement({value:2}))

  }
}
