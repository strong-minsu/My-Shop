import AppStatecontext from "../contexts/AppStateContext";
import { useContext } from "react";

export default function useActions() {
  const { addToShoppingCart, remove, removeAll } = useContext(AppStatecontext);

  return { addToShoppingCart, remove, removeAll };
}
