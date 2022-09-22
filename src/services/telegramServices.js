// import axios from "axios";

// export const sendMessageTelegram = (item) => {
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
//     const text = `<strong>Надійшло нове замовлення</strong>:%0A______________________%0A<i>Дата: ${messageSendDate.date}</i> %0A<i>Час: ${messageSendDate.time}</i> %0A${item.name} %0AКод товару: <code>${item.vendorCode}</code>%0AЦіна товару: <b>${item.price} грн</b>`;
//     const LINK = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${element}&text=${text}&parse_mode=html`;
//     axios.get(LINK);
//   }
//   console.log(messageSendDate);
// };
