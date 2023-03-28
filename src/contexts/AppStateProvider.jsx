import AppStateContext from "./AppStateContext";
//image파일 import 하기
import Laptop from "../images/Laptop.jpg";
import Moniter from "../images/Moniter.jpg";
import Keybord from "../images/Keybord.jpg";
import Mouse from "../images/Mouse.jpg";
import Notebook from "../images/Notebook.jpg";
import Glasses from "../images/Glasses.jpg";
import Headset from "../images/Headset.jpg";

//context provider..! <- 상태 변화를 알려준다
import { useState } from "react";
import { useCallback } from "react";

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
    {
      id: "gnum-05",
      title: "Notebook",
      desc: "It's the notebook to write down ideas that come to mind.",
      price: "3",
      image: Notebook,
    },
    {
      id: "gnum-06",
      title: "Glasses",
      desc: "This is a glasses with blue light blocking.",
      price: "15",
      image: Glasses,
    },
    {
      id: "gnum-07",
      title: "Headset",
      desc: "This is a Bluetooth headset with noise cancelling function.",
      price: "30",
      image: Headset,
    },
  ]);

  //order 쇼핑카트 담긴 주문 목록 관리
  const [orders, setOrders] = useState([]);

  //쇼핑카트에 add, remove, all remove  하는 기능 추가

  //추가하는 기능 (상품에 달려있는 쇼핑카트 버튼을 누르면, 상품 id가 전달됨)
  const addToShoppingCart = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);
      //finded된 상품을 처음 주문 받는 경우
      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);

  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);

  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{ goods, orders, addToShoppingCart, remove, removeAll }}
    >
      {children}
    </AppStateContext.Provider>
  );
}
