import { createReducer, on, Action } from "@ngrx/store";
import { addItem, removeItem, clearItems } from "./item.actions";

export interface State {
  data: Array<Item>;
  error: String;
}
export interface Item {
  name : String;
  updated : Date
  id: number;
}

export const initialState: State = { data: [], error: null };

const _itemReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => ({ ...state, data: [...state.data, item] })),

  on(removeItem, (state, { item }) => {
    let arrayData = state.data;
    let index = arrayData.indexOf(item);
    let array = [...arrayData.slice(0, index), ...arrayData.slice(index + 1)];
    return {
      ...state,
      data: array
    };
  }),

  on(clearItems, state => {
    return { ...state, data: [] };
  })
);

export function itemReducer(state: State | undefined, action: Action) {
  return _itemReducer(state, action);
}
