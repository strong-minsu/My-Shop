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
              <div className="good__body">
                <img src={image} alt={title} style={{ width: "100px" }} />
                <div className="good__title">
                  <div
                    className="btn btn--primary float--right"
                    // onClick={click}
                  >
                    <i className="icon icon--plus" />
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
