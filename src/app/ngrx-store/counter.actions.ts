import {createAction, props,Action} from "@ngrx/store";

// export const INCREMENT = "[Counter] Increment"
// export const DECREMENT = "[Counter] Decrement"




// export class IncrementAction implements Action {
//   type = INCREMENT;
//   constructor(public value:number){}
// }

// export class DecrementAction implements Action {
//   type = DECREMENT;
//   constructor(public value:number){}
// }


// export type CounterActions = IncrementAction | DecrementAction

export const increment = createAction(
  '[Counter] Increment',
  props<{value:number}>()
)

export const decrement = createAction(
  '[Counter] Decrement',
  props<{value:number}>()
)

export const set = createAction('[Counter] Set', props<{value:number}>())
export const init = createAction('[Counter] init')
