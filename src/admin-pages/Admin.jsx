import React, { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
const Admin = () => {
  const [files, setFiles] = useState(null);
  console.log(files);
  let [xml, setXml] = useState("");

  async function getFiles(e) {
    e.preventDefault();

    try {
      const reader = new FileReader();
      reader.onload = function () {
        setXml(this.result);
      };
      reader.readAsText(files);
      var xmlParse = new XMLParser().parseFromString(xml);
      console.log(xmlParse);
      // console.log(xmlParse.children[0].children[5]);
    } catch (err) {
      console.log(err);
    }
  }
  // прочитали xml
  // console.log(xml);

  return (
    <div className="admin__content">
      <form>
        <input type="file" onChange={(e) => setFiles(e.target.files[0])} />
        <button onClick={(e) => getFiles(e)}>Спарсити</button>
      </form>
      {/* <p>{xml}</p> */}
    </div>
  );
};

export default Admin;
