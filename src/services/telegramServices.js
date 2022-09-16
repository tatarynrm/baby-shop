import axios from "axios";

export const sendMessageTelegram = (item) => {
  const BOT_TOKEN = "5658679308:AAGqYTBRIYv1J6GigNA0sWWGYZCzt4i-1Co";
  const HRYSTIA_TG = "478496689";
  const ROMAN_TG = "282039969";
  const date = new Date();
  console.log(date);
  const messageSendDate = {
    time: date.toLocaleTimeString(),
    date: date.toLocaleDateString(),
  };
  const userList = [ROMAN_TG];
  for (let i = 0; i < userList.length; i++) {
    const element = userList[i];
    const text = `<strong>Надійшло нове замовлення</strong>:%0A______________________%0A<i>Дата: ${messageSendDate.date}</i> %0A<i>Час: ${messageSendDate.time}</i> %0A${item.name} %0AКод товару: <code>${item.vendorCode}</code>%0AЦіна товару: <b>${item.price} грн</b>`;
    const LINK = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${element}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", LINK, true);
    api.send();
    console.log(userList);
  }
  console.log(messageSendDate);
};
