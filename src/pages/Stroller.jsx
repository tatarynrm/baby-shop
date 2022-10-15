import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StrollerCard from "../components/card/StrollerCard";
import strollers from "../localDB/convertjson.json";
import strollerPhoto from "../assets/images/body-menu/stroller.webp";
import Pagination from "../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory, fetchProducts } from "../redux/slices/productsSlice";
import { strollerCategory } from "../constants/categories";
import { Button } from "@mui/material";
import { categoreis } from "../localDB/categories";
export default React.memo(function Stroller() {
  const [category, setCategory] = useState(10);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const handleChangeCategory = async (item) => {
    setCategory(item.value);
    dispatch(fetchByCategory(category));
  };
  // console.log(products);
  const [strollers, setStrollers] = useState([]);
  useEffect(() => {
    dispatch(fetchByCategory(category));
  }, []);
  useEffect(() => {
    dispatch(fetchByCategory(category));
  }, [category]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div className="strollers-page container">
        cd
        <div className="strollers-header block-header">
          <img src={strollerPhoto} alt="dsd" />
        </div>
        <div className="categories">
          {categoreis.slice(0, 4).map((item, i) => (
            <button
              onClick={() => handleChangeCategory(item)}
              className={item.value === category ? "active" : ""}
              key={item.value}
            >
              {item.title}
            </button>
          ))}
        </div>
        {/* <div className="strollers-category">
          <Button>2 в 1</Button>
          <Button>3 в 1</Button>
          <Button>Прогулянкові</Button>
          <Button>Для двійні</Button>
        </div> */}
        <div className="strollers container">
          {products.map((item, i) => {
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
