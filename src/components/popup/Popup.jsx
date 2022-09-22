import React from "react";
import axios from "axios";
import { useState } from "react";
const Popup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, phone);
    const BOT_TOKEN = "5658679308:AAGqYTBRIYv1J6GigNA0sWWGYZCzt4i-1Co";
    const HRYSTIA_TG = "478496689";
    const ROMAN_TG = "282039969";
    const ROS_ID = "485299726";
    const STEPAN_ID = "197931925";
    const date = new Date();
    const messageSendDate = {
      time: date.toLocaleTimeString(),
      date: date.toLocaleDateString(),
    };
    const userList = ["478496689"];
    for (let i = 0; i < userList.length; i++) {
      const element = userList[i];
      const text = `Ім'я: ${name}%0AТелефон: ${phone}%0AАдреса доставки: ${city}`;
      const LINK = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${element}&text=${text}&parse_mode=html`;
      axios.get(LINK);
    }
    console.log(messageSendDate);
  };
  // const sendMessageTelegram = (item) => {
  //   const BOT_TOKEN = "5658679308:AAGqYTBRIYv1J6GigNA0sWWGYZCzt4i-1Co";
  //   const HRYSTIA_TG = "478496689";
  //   const ROMAN_TG = "282039969";
  //   const ROS_ID = "485299726";
  //   const STEPAN_ID = "197931925";
  //   const date = new Date();
  //   const messageSendDate = {
  //     time: date.toLocaleTimeString(),
  //     date: date.toLocaleDateString(),
  //   };
  //   const userList = ["478496689"];
  //   for (let i = 0; i < userList.length; i++) {
  //     const element = userList[i];
  //     const text = `${}`;
  //     const LINK = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${element}&text=${text}&parse_mode=html`;
  //     axios.get(LINK);
  //   }
  //   console.log(messageSendDate);
  // };
  return (
    <div className="popup">
      <h1>Залишити заявку</h1>
      <img src="../../assets/images/monkey.png" alt="dsad" />
      {/* <Form>
        <Form.Group className="mb-3">
          <Form.Label>Ім'я</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ваше ім'я"
            onChange={(e) => handleChangeName(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Телефон</Form.Label>
          <Form.Control
            type="text"
            placeholder="Телефон"
            onChange={(e) => handleChangePhone(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Адреса доставки</Form.Label>
          <Form.Control
            type="text"
            placeholder="Адреса доставки"
            onChange={(e) => handleChangeCity(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => submitForm(e)}>
          Submit
        </Button>
        <button className="button">
          <a href="https://www.facebook.com/comfort4baby/" target={"_blank"}>
            Facebook
          </a>
        </button>
      </Form> */}
    </div>
  );
};

export default Popup;
