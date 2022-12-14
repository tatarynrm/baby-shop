import React, { useState, useRef } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categoreis } from "../localDB/categories";
const ProductEdit = () => {
  const [img, setImg] = useState([]);
  const [values, setValues] = useState({
    picture: [],
    name: "",
    price: "",
    categoryId: "" || 10,
    vendor: "",
    vendorCode: "",
    description: "",
    importedId: "",
  });
  const inputFileRef = useRef();

  const handleChangeFile = async (event) => {
    event.preventDefault();
    const files = event.target.files;
    let images;
    for (let i = 0; i < files.length; i++) {
      const element = files[i];
      images = element;
    }
    console.log(images);
    try {
      const formData = new FormData();
      formData.append("image", files[0]);
      formData.append("image", files[1]);
      formData.append("image", files[2]);
      formData.append("image", files[3]);
      formData.append("image", files[4]);
      formData.append("image", files[5]);
      formData.append("image", files[6]);
      formData.append("image", files[7]);
      formData.append("image", files[8]);
      formData.append("image", files[9]);
      formData.append("image", files[10]);
      formData.append("image", files[11]);
      formData.append("image", files[12]);
      const { data } = await axios.post("/uploads", formData);
      let pictures = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        pictures.push(
          `http://185.69.155.233:5000/uploads/${element.originalname}`
        );
      }
      console.log(pictures);
      setValues({ ...values, picture: pictures });
    } catch (err) {
      console.log(err);
    }
  };

  const photoDelete = (item) => {
    const filterArray = values.picture.filter((pic) => pic !== item);
    console.log(filterArray);
    setValues({ ...values, picture: filterArray });
  };
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = axios.post("/products", values);
      notify();
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  // const notify = () => toast(`?????????????????? ??????????: ${values.name} `);
  const notify = () =>
    toast.success(`???????????????? ??????????: ${values.name} `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="create-section">
      <div className="images-create-preview">
        {values.picture.length >= 0
          ? values.picture.map((item, idx) => (
              <div key={item} className="img-preview">
                <span
                  onClick={() => photoDelete(item)}
                  style={{ color: "red" }}
                >
                  X
                </span>
                <img style={{ width: "120px" }} src={item} alt="dadas" />
              </div>
            ))
          : null}
      </div>
      <div className="form-create">
        <form
          encType="multipart/form-data"
          onSubmit={(e) => handleCreateProduct(e)}
          className="product-create-update"
        >
          <div className="form-control image-button">
            <div onClick={() => inputFileRef.current.click()}>
              ?????????????????????? ????????
            </div>
            <input
              accept="/images"
              type="file"
              name="picture"
              // value={values.picture}
              hidden
              multiple
              ref={inputFileRef}
              onChange={handleChangeFile}
            />
          </div>
          <div className="form-control">
            <label>?????????? ????????????</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label>????????</label>
            <input
              type="text"
              name="price"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label>Imported Id</label>
            <input
              type="text"
              name="importedId"
              value={values.importedId}
              onChange={(e) =>
                setValues({ ...values, importedId: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label>??????????</label>
            <input
              type="text"
              name="vendor"
              value={values.vendor}
              onChange={(e) => setValues({ ...values, vendor: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label>?????? ????????????</label>
            <input
              type="text"
              name="vendorCode"
              value={values.vendorCode}
              onChange={(e) =>
                setValues({ ...values, vendorCode: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label>????????</label>
            <textarea
              type="text"
              name="description"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <select
            name="categoryId"
            onChange={(e) =>
              setValues({ ...values, categoryId: e.target.value })
            }
          >
            {categoreis.map((item, id) => (
              <option key={item.value} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
          <button type="submit">???????????????? ??????????????</button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProductEdit;
