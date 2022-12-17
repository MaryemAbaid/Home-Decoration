import React from "react";
import { list } from "../../data/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSystem";

const RecentCard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, name, price } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <h4>{name}</h4>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <button onClick={() => dispatch(addToCart(val))}>
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
