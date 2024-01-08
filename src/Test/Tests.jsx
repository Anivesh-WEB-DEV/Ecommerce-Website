import React, {useEffect, useState} from "react";
// import './Test.css';
import '../components/NavCard/Card.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../components/Redux/Api";
import StarIcon from "@mui/icons-material/Star";
import '../components/NavCard/Card.css'




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
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {stateApi &&
            stateApi.filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="card flex-row" key={val.id}>
                <div className="card_box ">
                  <div className="card_image">
                    <img src={val.image} alt="card_image" className="image" />
                  </div>

                  <div className="card_middle_box">
                    <h4 className="card_title">{val.title.slice(0, 24)}...</h4>
                    <span className="card_discription">
                      {val.description.slice(0, 68)}...
                    </span>
                  </div>
                  <div className="card_lower_box">
                    <div className="card_price">${val.price}</div>
                    <div className="card_rating">
                      {" "}
                      {val.rating.rate}
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
                      Only {val.rating.count} pieces left
                    </span>
                  </div>
                </div>
              </div> 
                )
              })
            }
        </div>
      </div>
    </>
  )
}

export default Tests;