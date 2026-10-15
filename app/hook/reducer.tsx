import { Action, Movie } from "../type/type";

export default function Reducer(state: Movie[], action: Action): Movie[] {
  switch (action.type) {
    case "load":
      return action.payload;
    case "add":
      if (state.some((item) => item.id === action.payload.id)) {
        return state;
      }

      return [...state, action.payload];

    case "remove":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
