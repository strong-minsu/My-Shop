import useGoods from "../hooks/useGoods";

export default function Goods() {
  const goods = useGoods();
  return (
    <main>
      <div className="goods">
        {goods.map((good) => {
          const { id, title, desc, price, image } = good;

          return (
            <div className="good" key={id}>
              <div className="good__image" style={{ padding: "20px 0 33px 0" }}>
                <img
                  className="good__artwork good__edit"
                  src={image}
                  alt={title}
                  style={{
                    objectFit: "contain",
                    width: "90%",
                    border: "2px solid rgb(77, 76, 76, 0.7)",
                  }}
                />
              </div>
              <div className="good__body">
                <div className="good__title">
                  <div
                    className="btn btn--primary float--right"
                    // onClick={click}
                  >
                    <i className="material-symbols-outlined">
                      add_shopping_cart
                    </i>
                  </div>

                  {title}
                </div>
                <p className="good__price">$ {price}</p>
                <p className="good__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
