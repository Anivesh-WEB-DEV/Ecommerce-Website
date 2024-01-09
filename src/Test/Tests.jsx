import React, { useEffect, useState } from "react";
import "../components/NavCard/Card.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../components/Redux/Api";
import StarIcon from "@mui/icons-material/Star";
import "../components/NavCard/Card.css";
function Tests() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const stateApi = useSelector((state) => state.api.data);
  useEffect(() => {
    dispatch(fetchApi());
    console.log("useEffect called by Cards");
  }, []);
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {stateApi &&
            stateApi
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((e) => {
                return (
                  <div className="outer_card">
                  <div className="card_box">
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
                </div>
                </div>
                );
              })}
        </div>
      </div>
    </>
  );
}
export default Tests;
