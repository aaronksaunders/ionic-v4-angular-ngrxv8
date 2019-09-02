import { createAction, props } from "@ngrx/store";
import { Item } from "./item.reducer";

export const addItem = createAction(
  "[ItemStore Component] Add Item",
  props<{ item: Item }>()
);
export const removeItem = createAction("[ItemStore Component] Remove Item",
props<{ item: Item }>());
export const clearItems = createAction("[ItemStore Component] Clear Items");
