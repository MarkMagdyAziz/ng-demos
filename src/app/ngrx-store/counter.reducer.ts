import {Action, createReducer,on} from "@ngrx/store";
// import {CounterActions, DECREMENT, DecrementAction, INCREMENT, IncrementAction} from "./counter.actions";
import {decrement,increment, set} from "./counter.actions";

const initialState = 0

// export const counterReducer = (state = initialState,action: CounterActions | Action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + (action as IncrementAction).value

//     case DECREMENT:
//       return state - (action as DecrementAction).value

//     default:
//       return state

//   }
// }

export const counterReducer = createReducer(initialState,
  on(increment,(state,action) => state + action.value),
  on(decrement,(state,action) => state - action.value),
  on(set, (state, action) => action.value),
)


