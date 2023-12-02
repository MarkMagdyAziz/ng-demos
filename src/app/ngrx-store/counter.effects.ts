import {Actions,createEffect,ofType} from "@ngrx/effects";
import {decrement,increment,init,set} from "./counter.actions";
import {tap,withLatestFrom,of,switchMap} from 'rxjs'
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCounter} from "./counter.selectots";

@Injectable()
export class CounterEffects {
  constructor (private actions$: Actions,private store: Store<{counter: number}>) { }
  loadCount = createEffect(
    () => {
      return this.actions$.pipe(ofType(init),switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if (storedCounter) {
          return of(set({value: +storedCounter}));
        }
        return of(set({value: 0}));

      }))
    }
  )

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment,decrement),
        withLatestFrom(this.store.select(selectCounter)),
        tap(([action,value]) => {
          console.log(action);
          localStorage.setItem('count',value.toString())
        })
      ),
    {dispatch: false}
  );
}
