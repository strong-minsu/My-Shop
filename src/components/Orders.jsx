import { useMemo } from "react";
import useActions from "../hooks/useActions";
import useGoods from "../hooks/useGoods";
import useOrders from "../hooks/useOrders";

export default function Orders() {
  const orders = useOrders();
  const goods = useGoods();
  const { remove, removeAll } = useActions();

  //total price
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const good = goods.find((g) => g.id === id);
        return good.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, goods]);
  //쇼핑카트에 담아둔 제품이 하나도 없을 경우
  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">
            <i className="material-symbols-outlined">shopping_cart</i>
            <br />
            You don't have any orders
          </div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
      </aside>
    );
  }
  //쇼핑카트에 제품이 담길 경우
  return (
    <aside>
      <div className="order">
        <div className="ptitle">
          <i className="material-symbols-outlined">shopping_cart</i>
          <p>This is your shopping cart</p>
        </div>
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const good = goods.find((p) => p.id === id);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <img src={good.image} alt="" />
                </div>
                <div className="content">
                  <p className="title">
                    {good.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {good.price * order.quantity}</p>

                  {/* remove goods */}
                  <button className="btn btn--link" onClick={click}>
                    <i class="material-symbols-outlined">
                      remove_shopping_cart
                    </i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* total price */}
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>

            {/* remove all goods */}
            <button className="btn btn--link" onClick={removeAll}>
              <i className="material-symbols-outlined">delete</i>
            </button>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}
