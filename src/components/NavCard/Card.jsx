// import React, { useEffect } from "react";
// import StarIcon from "@mui/icons-material/Star";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchApi } from "../Redux/Api";
// // import CircularIndeterminate from "../Loader";
// import "./Card.css";
// import { addToCart } from "../Redux/cartSlice";
// import PageNotFound from "./PageNotFound";
// const Cards = () => {
//   const dispatch = useDispatch();
//   const stateApi = useSelector((state) => state.api.data);
//   const isLoading = useSelector((state) => state.api.isLoading);
//   // const isError = useSelector((state) => state.api.isError);
//   useEffect(() => {
//     dispatch(fetchApi());
//     console.log("useEffect called by Cards");
//   }, );
//   if(isLoading){
//     return <PageNotFound/>
//   }
//   // if (isError) {
//   //   return (
//   //     <PageNotFound/>
//   //   );

//   const handleAddToCart = (e) => {
//     dispatch(addToCart(e));
//   };
//   return (
//    <div className="outer_card">
//       <div className="card_box">
//         {stateApi && (
//           <div className="card_box">
//             {stateApi.map((e) => (
//               <div className="card" key={e.id}>
//                 <div className="card_box ">
//                   <div className="card_image">
//                     <img src={e.image} alt="card_image" className="image" />
//                   </div>
//                   <div className="card_middle_box">
//                     <h4 className="card_title">{e.title.slice(0, 24)}...</h4>
//                     <span className="card_discription">
//                       {e.description.slice(0, 68)}...
//                     </span>
//                   </div>
//                   <div className="card_lower_box">
//                     <div className="card_price">${e.price}</div>
//                     <div className="card_rating">
//                       {" "}
//                       {e.rating.rate}
//                       <StarIcon
//                         className="star_icon"
//                         sx={{ marginLeft: 0.5, marginRight: 0.5, fontSize: 20 }}
//                       />
//                     </div>
//                   </div>
//                   <div className="card_btn_count">
//                     <button
//                       className="card_btn"
//                       onClick={() => handleAddToCart(e)}
//                     >
//                       Add to Cart
//                     </button>
//                     <span className="card_count">
//                       Only {e.rating.count} pieces left
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>

//   );
// };
// export default Cards;

{
  /* <div className="outer_card">
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
    </div> */
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Skeleton, CardActionArea } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../Redux/Api";
import "./Card.css";
import { addToCart } from "../Redux/cartSlice";
import PageNotFound from "./PageNotFound";
const Cards = () => {
  const dispatch = useDispatch();
  const stateApi = useSelector((state) => state.api.data);
  const isLoading = useSelector((state) => state.api.isLoading);
  const isError = useSelector((state) => state.api.isError);
  useEffect(() => {
    dispatch(fetchApi());
    console.log("useEffect called by Cards");
  }, [dispatch]);
  if (isError) {
    return <PageNotFound />;
  }

  const handleAddToCart = (e) => {
    dispatch(addToCart(e));
  };
  if (isLoading && !stateApi) {
    return (
      <div className="outer_card">
        <div className="card_box">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((placeholder, index) => (
            <Card key={index} sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <Skeleton variant="rectangular" height={295} />
                <CardContent>
                  <Typography variant="h5" component="div">
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Skeleton count={2} />
                  </Typography>
                  <h4>
                    <Skeleton width={80} />
                  </h4>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" disabled>
                  Add to Cart
                </Button>
                <span className="card_count">
                  <Skeleton width={120} />
                </span>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }

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

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// import React, { useEffect } from "react";
// import StarIcon from "@mui/icons-material/Star";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions, Skeleton } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchApi } from "../Redux/Api";
// import "./Card.css";
// import { addToCart } from "../Redux/cartSlice";

// const Cards = () => {
//   const dispatch = useDispatch();
//   const stateApi = useSelector((state) => state.api.data);
//   const isLoading = useSelector((state) => state.api.isLoading);

//   useEffect(() => {
//     dispatch(fetchApi());
//   }, []);

//   const handleAddToCart = (e) => {
//     dispatch(addToCart(e));
//   };

//   if (isLoading && !stateApi) {
//     return (
//       <div className='outer_card'>
//         <div className='card_box'>
//           {[1,2,3,4,5,6,7,8,9,10,11,].map(( index) => (
//             <Card key={index} sx={{ maxWidth: 345 }} className='card'>
//               {/ Skeleton content /}
//               <CardActionArea>
//                 <Skeleton variant="rectangular" height={140} />
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     <Skeleton />
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     <Skeleton count={2} />
//                   </Typography>
//                   <h4>
//                     <Skeleton width={80} />
//                   </h4>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button size="small" color="primary" disabled>
//                   Add to Cart
//                 </Button>
//                 <span className='card_count'>
//                   <Skeleton width={120} />
//                 </span>
//               </CardActions>
//             </Card>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="outer_card">
//       <div className="card_box">
//         {stateApi && (
//           <div className="card_box">
//             {stateApi.map((e) => (
//               <div className="card" key={e.id}>
//                 <div className="card_box ">
//                   <div className="card_image">
//                     <img src={e.image} alt="card_image" className="image" />
//                   </div>
//                   <div className="card_middle_box">
//                     <h4 className="card_title">{e.title.slice(0, 24)}...</h4>
//                     <span className="card_discription">
//                       {e.description.slice(0, 68)}...
//                     </span>
//                   </div>
//                   <div className="card_lower_box">
//                     <div className="card_price">${e.price}</div>
//                     <div className="card_rating">
//                       {" "}
//                       {e.rating.rate}
//                       <StarIcon
//                         className="star_icon"
//                         sx={{ marginLeft: 0.5, marginRight: 0.5, fontSize: 20 }}
//                       />
//                     </div>
//                   </div>
//                   <div className="card_btn_count">
//                     <button
//                       className="card_btn"
//                       onClick={() => handleAddToCart(e)}
//                     >
//                       Add to Cart
//                     </button>
//                     <span className="card_count">
//                       Only {e.rating.count} pieces left
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cards;
