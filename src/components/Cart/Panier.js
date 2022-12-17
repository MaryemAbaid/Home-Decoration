// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSystem";
import { useDispatch } from "react-redux";
 

const Panier = () => {
  const cart = useSelector((item) => item.cart);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <>
      <h5>votre Panier</h5>
      <div className="content grid3 mtop">
        {cart.cart.map((item) => (
          <div className="box shadow" key={item.index}>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <div className="text">
              <h4>{item.name}</h4>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{item.price}</button>
                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        id: item.id,
                      })
                    )
                  }
                >
                  supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Panier;
