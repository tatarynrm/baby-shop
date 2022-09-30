import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StrollerCard from "../components/card/StrollerCard";
import strollers from "../localDB/convertjson.json";
import strollerPhoto from "../assets/images/body-menu/stroller.webp";
import Pagination from "../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../redux/slices/productsSlice";
import { strollerCategory } from "../constants/categories";

export default React.memo(function Stroller() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [strollers, setStrollers] = useState([]);
  useEffect(() => {
    dispatch(fetchByCategory(strollerCategory));
  }, []);
  useEffect(() => {
    setStrollers(products);
  });
  console.log(products);
  return (
    <>
      <div className="strollers-page">
        <div className="strollers-header block-header">
          <img src={strollerPhoto} alt="dsd" />
        </div>

        <div className="strollers container">
          {strollers.map((item, i) => {
            return <StrollerCard key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}, []);

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import StrollerCard from "../components/card/StrollerCard";
// import strollers from "../localDB/convertjson.json";
// import strollerPhoto from "../assets/images/body-menu/stroller.webp";
// import Pagination from "../components/pagination/Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchByCategory } from "../redux/slices/productsSlice";
// import { strollerCategory } from "../constants/categories";
// const Stroller = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);
//   useEffect(() => {
//     dispatch(fetchByCategory(strollerCategory));
//   }, []);
//   console.log(products);
//   return (
//     <>
//       <div className="strollers-page">
//         <div className="strollers-header block-header">
//           <img src={strollerPhoto} alt="dsd" />
//         </div>

//         <div className="strollers container">
//           {products.map((item, i) => {
//             return <StrollerCard key={i} item={item} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Stroller;
