import {CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {CounterService} from 'src/app/counter.service';
import {init} from 'src/app/ngrx-store/counter.actions';
import {selectDoubleCounter} from 'src/app/ngrx-store/counter.selectots';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[CommonModule]

})
export class CounterOutputComponent{
  // counter = 0;
  // counterServiceSub?: Subscription;

  count$!:Observable<number>
  countDouble$!:Observable<number>

  constructor(private counterService: CounterService,
    private store:Store<{counter:number}>) {
    this.count$ = store.select('counter',)
    this.countDouble$ = store.select(selectDoubleCounter)
  }

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
