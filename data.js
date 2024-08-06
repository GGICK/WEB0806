// import data from "./data.json";

import axios from "axios";

// console.log(data);

// const user = {
//   name: "yong",
//   age: 20,
//   emails: ["dlapdlf1@gmail.com", "dlapdlf2@gmail.com"],
// };

// console.log(user);

// const str = JSON.stringify(user); //객체를 문자열로 만듬
// console.log(str);
// console.log(typeof str);

// const obj = JSON.parse(str); // 다시 문자열을 객체로 만듬
// console.log(obj);

// //로컬 스토리지에 user객체를 문자열로만들어서 보냄
// localStorage.setItem("user", JSON.stringify(user));
// // 로컬스토리지에 user객체를 가져옴
// console.log(localStorage.getItem("user"));
// console.log(JSON.parse(localStorage.getItem("user")));

// const str2 = localStorage.getItem("user");
// const obj2 = JSON.parse(str2);
// obj2.age = 22;
// console.log(obj2);
// localStorage.getItem(JSON.stringify(obj2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////axios / open api

// import axios from "axios";
// function getMovies() {
//   axios
//     .get("키값(노출위험때문에 지움 메모장에 적어놓음)")
//     .then((response) => {
//       console.log(response);
//       const h1El = document.querySelector("h1");
//       const h2El = document.querySelector("h2");
//       const h3El = document.querySelector("h3");
//       const imgEl = document.querySelector("img");
//       h1El.textContent = response.data.Title;
//       h2El.textContent = response.data.Type;
//       h3El.textContent = response.data.Year;
//       imgEl.src = response.data.Poster;
//     });
// }

// getMovies();

//자전거 api

const API_KEY = "키값(노출위험때문에 지움 메모장에 적어놓음)";
async function getData() {
  const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/200/`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
