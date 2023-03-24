import AppStateContext from "./AppStateContext";
//image파일 import 하기
import Laptop from "../images/Laptop.jpg";
import Moniter from "../images/Moniter.jpg";
import Keybord from "../images/Keybord.jpg";
import Mouse from "../images/Mouse.jpg";

//context provider..! <- 상태 변화를 알려준다
import { useState } from "react";

export default function AppStateProvider({ children }) {
  const [goods] = useState([
    {
      id: "gnum-01",
      title: "Laptop",
      desc: "This is a laptop with good performance, a must-have item for developers!",
      price: "100",
      image: Laptop,
    },
    {
      id: "gnum-02",
      title: "Moniter",
      desc: "A monitor that will make your laptop screen bigger!",
      price: "30",
      image: Moniter,
    },
    {
      id: "gnum-03",
      title: "Keybord",
      desc: "Input tool! It's a keyboard that's good for hitting.",
      price: "20",
      image: Keybord,
    },
    {
      id: "gnum-04",
      title: "Mouse",
      desc: "Input tool! It's a noiseless mouse.",
      price: "10",
      image: Mouse,
    },
  ]);

  return (
    <AppStateContext.Provider value={{ goods }}>
      {children}
    </AppStateContext.Provider>
  );
}
