import AppStateContext from "../contexts/AppStateContext";
import { useContext } from "react";

export default function useGoods() {
  const { goods } = useContext(AppStateContext);

  return goods;
}
