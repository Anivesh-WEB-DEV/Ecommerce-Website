import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../Redux/Api";
import Error from "../../assets/3009287.jpg";
import CircularIndeterminate from "../Loader";
import "./Card.css";
import { addToCart } from "../Redux/cartSlice";
const Cards = () => {
  const dispatch = useDispatch();
  const stateApi = useSelector((state) => state.api.data);
  const isLoading = useSelector((state) => state.api.isLoading);
  const isError = useSelector((state) => state.api.isError);
  useEffect(() => {
    dispatch(fetchApi());
    console.log("useEffect called by Cards");
  }, []);
  if (isLoading) {
    return CircularIndeterminate();
  }
  if (isError) {
    return (
      <div className="errorImg">
        <img src={Error} alt="ErrorImg" className="Errorimg" />
      </div>
    );
  }
  const handleAddToCart = (e) => {
    dispatch(addToCart(e));
  };
  return (
    <div className="outer_card">
      <div className="card_box">
        {stateApi && (
          <div className="card_box">
            {stateApi.map((e) => (
              <div className="card" key={e.id}>
                <div className="card_box ">
                  <div className="card_image">
                    <img src={e.image} alt="card_image" className="image" />
                  </div>
                  <div className="card_middle_box">
                    <h4 className="card_title">{e.title.slice(0, 24)}...</h4>
                    <span className="card_discription">
                      {e.description.slice(0, 68)}...
                    </span>
                  </div>
                  <div className="card_lower_box">
                    <div className="card_price">${e.price}</div>
                    <div className="card_rating">
                      {" "}
                      {e.rating.rate}
                      <StarIcon
                        className="star_icon"
                        sx={{ marginLeft: 0.5, marginRight: 0.5, fontSize: 20 }}
                      />
                    </div>
                  </div>
                  <div className="card_btn_count">
                    <button
                      className="card_btn"
                      onClick={() => handleAddToCart(e)}
                    >
                      Add to Cart
                    </button>
                    <span className="card_count">
                      Only {e.rating.count} pieces left
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Cards;
